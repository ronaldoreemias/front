import Navbar from "../../componets/Navbar/index";
import Style from "./cadastro.module.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom"

function Login() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarsenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("email", email);
    formData.append("senha", senha);
    formData.append("confirmarsenha", confirmarsenha);

    if(nickname === "" || email === "" || senha === "" || confirmarsenha === ""){
      alert("Por favor, preencha todos os campos.");
      return;
    }


    if(senha !== confirmarsenha){
      alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
      return;
    }

    const verificarEmail = ['@', '.com', '.net', '.org'];
    const emailValido = verificarEmail.some((elemento) => email.includes(elemento));

    if (!emailValido) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return;
    }


    const promessa = await fetch("https://45223778-160a-4e48-a3a5-3f6b4cc349a3-00-29mcaw9lpfo4i.picard.replit.dev/", {
      method: "POST",
      body: formData,
    });
    
    const resposta = await promessa.json();
    setMensagem(resposta.mensagem);


    if (resposta.mensagem === "Entrada muito longa"){
      alert("Você está tentando fazer algo suspeito, porfavor pense com calma nas suas escolhas.")
      return;
    }

    if (resposta.mensagem === "Email contém caracteres inválidos"){
      alert("no campo Email você tentou fazer um SQL Injection ? cuidado com suas escolhas")
      return;
    }

    if (resposta.mensagem === "Nickname contém caracteres inválidos"){
      alert("no campo Nickname você tentou fazer um SQL Injection ? cuidado com suas escolhas")
      return;
    }
    

    if (resposta.mensagem === "Senha contém caracteres inválidos"){
      alert("no campo Senha você tentou fazer um SQL Injection ? cuidado com suas escolhas")
      return;
    }


    if (resposta.mensagem === "Usuário cadastrado") {
      navigate("/loja");
    }
  };

  return (
    <form className={Style.forme} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="nick-name"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <br/>
      <input
        type="text"
        placeholder="e-mail"
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
      <input
        type="password"
        placeholder="confirmar sua senha"
        value={confirmarsenha}
        onChange={(e) => setConfirmarsenha(e.target.value)}
      />
      <br/>
      <button type="submit">Cadastrar</button>
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
          </div>
          <div className={Style.content}>
          <Login />  
          </div>
          <div className={Style.footer}>
          </div>
        </div>
     </div>

    </div>
  );
}

export default Loja;