import Style from "./NavbarForum.module.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useState } from 'react';
import carrinho from "../../assets/axios_logo_icon_168545.ico";
import linkedin from "../../assets/linkedin_logo_square_icon_134016.ico";
import github from "../../assets/github_icon-icons.com_60477.ico";
import whatsapp from "../../assets/whatsapp_logo_icon_153036.ico";

function sair(){
  localStorage.removeItem("token");
  window.location.href = "/";
  return;
}

function NavbarForum() {
  const [open, setOpen] = useState(false);

  return (
    <div className={Style.Navbar}>
      <div className={Style.partedecima}>
        <div className={Style.logo}>
          <img src={carrinho} alt="Logo Loja Axios" />
          <a href="https://axiosn-oticias.vercel.app/">
            <h1>Fórum Axios</h1>
          </a>
        </div>
        <div className={Style.pesquisa}>
          <a href="https://axiosn-oticias.vercel.app/">
              <h4>Notícias</h4>
          </a>
          <a href="https://axiosn-oticias.vercel.app/Notficacao">
              <h4>Sistema</h4>
          </a>
          <a href="https://ecommerce-axios.vercel.app/">
              <h4>Loja</h4>
          </a>
          <div className={Style.userMenu}>
            <button
              type="button"
              className={Style.toggle}
              onClick={() => setOpen(!open)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); } }}
              aria-expanded={open}
              aria-controls="user-dropdown"
            >
              Eu &#9662;
            </button>
            <ul id="user-dropdown" className={`${Style.dropdown} ${open ? Style.open : ''}`}>
              <li>
                <a href="/Perfil"><h5>perfil</h5></a>
              </li>
              <li>
                <a href="/CriarGrupo"><h5>criar grupo</h5></a>
              </li>
              <li>
                <button className={Style.logout} onClick={sair}><h4>sair</h4></button>
              </li>
            </ul>
          </div>
        </div>
        <div className={Style.links}>
          <a href="https://www.linkedin.com/in/ronaldo-reemias-b66b7a166/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/ronaldoreemias" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className={Style.github} />
          </a>
          <a href="https://chat.whatsapp.com/FivMCudmv1wENlalqeIth0" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" className={Style.github} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarForum;