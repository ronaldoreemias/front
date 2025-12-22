import Navbar from "../../componets/Navbar/index";
import Style from "./forum.module.css";

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
          <h2>My Header</h2>
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
          <h4>Footer</h4>
        </div>
      </div>
      <button onClick={sair}>sair</button>
     
    </div>
  );
}

export default Forum;