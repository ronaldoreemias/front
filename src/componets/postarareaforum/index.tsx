import style from "./postarforum.module.css";
import { useState } from "react";
import Enviar from "../../assets/mail_send_mail_icon_264214.ico";


function PostarForum() {
  const token = localStorage.getItem("token");
  const [texto, setTexto] = useState("");
  const [mensagem, setMensagem] = useState("");

  if (!token) {
    alert("Você não está autenticado, por favor faça o login");
    window.location.href = "/";
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (texto === "") {
      alert("Por favor, escreva algo antes de postar.");
      return;
    }

    const formData = new FormData();
    formData.append("texto", texto);

    const promessa = await fetch("http://localhost:8080/perguntas.php", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const resposta = await promessa.json();
    setMensagem(resposta.mensagem);

    if (resposta.mensagem === "Postagem bem-sucedida") {
      alert("Seu post foi publicado com sucesso!");
      setTexto("");
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <textarea
        id="texto"
        placeholder="Escreva seu post aqui..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <br />
      <button type="submit"><img src={Enviar} /></button>
      {mensagem && <p>{mensagem}</p>}
    </form>
  );
}

function AreapostarForum() {
  return (
    <div className={style.container}>
      <PostarForum />
    </div>
  );
}

export default AreapostarForum;
