import Navbar from "../../componets/Navbar/index";
import Style from "./Loja.module.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("senha", senha);

    if(email === "" || senha === ""){
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const promessa = await fetch("https://721f0f3b-c57a-4094-b3b6-c9496144d1ce-00-29tmu0rn8dc3f.worf.replit.dev/", {
      method: "POST",
      body: formData,
    });

    const resposta = await promessa.json();
    setMensagem(resposta.mensagem);
  
    if(resposta.mensagem === "Entrada inválida"){
      alert("Sua entrada é suspeita, tem certeza que quer fazer isso ?. embre-se que posso rastrear você.");
      return;
    }
    if(resposta.mensagem === "Entrada muito longa"){
      alert("suas entradas são longas de mais, acho que você está tentando fazer algo suspeito.... Tô de olho em você.");
      return;
    }
    
    if (resposta.status === "success") {
      localStorage.setItem("token", resposta.token);
      navigate("/Forum");
    }
  };

  return (
    <form className={Style.forme} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e-mail ou nick-name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <br />
      <button type="submit">entrar</button>
      <p>{mensagem}</p>
    </form>
  );
}


function Loja() {

  return (
    <div className={Style.Bodyloja}>
      <Navbar />

     <div className={Style.body}>
        <div className={Style.container}>
          <div className={Style.header}>
            <h2>Bem vindo a versão Beta 2.0.0</h2>
          </div>
          <div className={Style.content}>
          <Login />  
          </div>
          <div className={Style.footer}>
            <h4>ainda não tem cadastro ? <a href="/Cadastrar" >Click aqui</a></h4>
          </div>
        </div>
     </div>

    </div>
  );
}

export default Loja;