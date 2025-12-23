import Navbar from "../../componets/NavbarForum/index";
import Style from "./forum.module.css";
import Postagemarea from "../../componets/postarareaforum/index";

function sair(){
  localStorage.removeItem("token");
  window.location.href = "/";
  return;
}

function Forum() {

  return (
    <div className={Style.Bodyloja}>
      <Navbar />
      <div className={Style.container}>
        <div className={Style.header}>
          <Postagemarea />
        </div>
        <div className={Style.menu}>
          <a href="#">Link 1</a>
          <br/>
          <a href="#">Link 2</a>
          <br/>
          <a href="#">Link 3</a>
          </div>
        <div className={Style.content}>
          <h3>Lorem Ipsum</h3>
        </div>
        <div className={Style.feed}>
          <h3>Feed</h3>
        </div>
        <div className={Style.footer}>
          <button onClick={sair}>sair</button>
        </div>
      </div>
     
    </div>
  );
}

export default Forum;