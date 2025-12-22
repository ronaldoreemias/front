import Navbar from "../../componets/Navbar/index";
import Style from "./Loja.module.css";
import { useState} from "react";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

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
      Swal.fire({ 
        title: 'Error!', 
        text: 'Por favor, preencha todos os campos', 
        icon: 'error', 
     });
      return;
    }

    const promessa = await fetch("https://backend--lolitarebeca3.replit.app/login.php", {
      method: "POST",
      body: formData,
    });

    const resposta = await promessa.json();
    setMensagem(resposta.mensagem);
  
    if(resposta.mensagem === "Entrada inválida"){
      Swal.fire({ 
        title: 'Error!', 
        text: 'Sua entrada é suspeita, tem certeza que quer fazer isso ?. embre-se que posso rastrear você.', 
        icon: 'error', 
     });
      return;
    }
    if(resposta.mensagem === "Entrada muito longa"){
      Swal.fire({ 
        title: 'Error!', 
        text: 'suas entradas são longas de mais, acho que você está tentando fazer algo suspeito.... Tô de olho em você.', 
        icon: 'error', 
     });
      
      return;
    }
    
    if (resposta.mensagem === "Login bem-sucedido") {
      localStorage.setItem("token", resposta.token);
      navigate("/Forum");
    }
  };

  return (
    
    <form className={Style.forme} onSubmit={handleSubmit}>
      <div className={Style.titulo}>
        <h1>Login</h1>
        <p>versão Beta</p>
      </div>
      <br/>
      <div className={Style.input}>
        <label>
          Email cadastrado
        
        <input
          type="text"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
      </div>
      <br />
      <div className={Style.input}>
        <label>
            Senha
          </label>
          <input
            type="password"
            placeholder="sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
      </div>
      <br />
      <div className={Style.botoes}>
        <button type="submit">entrar</button>
      <a href="/Cadastrar" >Cadastrar</a>
      </div>
    <p className={Style.mensagem}>{mensagem}</p>
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
            <div className={Style.texto}>
              <h1>Fórum versão Beta 2.0.0</h1>
              <h2>Seja bem vindo ao Axios</h2>
              <p>Desenvolvido para você que quer apreder 
                e evoluir na área de tecnologia, se manter atualizado com as últimas notícias do mundo tech, tirar suas duvidas e encontrar comunidades.
              </p>
              <p>Faça login para acessar o fórum Axios</p>
            </div>
          </div>
          <div className={Style.content}>
          <Login />  
          </div>
        </div>
     </div>

    </div>
  );
}

export default Loja;