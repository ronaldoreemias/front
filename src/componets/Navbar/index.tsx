import Style from "./Navbar.module.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import carrinho from "../../assets/axios_logo_icon_168545.ico";
import linkedin from "../../assets/linkedin_logo_square_icon_134016.ico";
import github from "../../assets/github_icon-icons.com_60477.ico";
import whatsapp from "../../assets/whatsapp_logo_icon_153036.ico";


function Navbar() {
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
              <h4>Home</h4>
          </a>
          <a href="https://axiosn-oticias.vercel.app/Notficacao">
              <h4>Sistema</h4>
          </a>
          <a href="https://ecommerce-axios.vercel.app/">
              <h4>Loja</h4>
          </a>
          <a href="https://axiosn-oticias.vercel.app/Vagas">
              <h4>Vagas</h4>
          </a>
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

export default Navbar;