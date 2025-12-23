import Style from "./Navbar.module.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import carrinho from "../../assets/axios_logo_icon_168545.ico";


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
              <h4>Notícias</h4>
          </a>
          <a href="https://axiosn-oticias.vercel.app/Notficacao">
              <h4>Sistema</h4>
          </a>
          <a href="https://ecommerce-axios.vercel.app/">
              <h4>Loja</h4>
          </a>
          <a href="#">
              <h4>Fóruns</h4>
          </a>
          <a href="https://chat.whatsapp.com/FivMCudmv1wENlalqeIth0">
              <h4>comunidade</h4>
          </a>
          <a href="https://axiosn-oticias.vercel.app/Vagas">
              <h4>Vagas de empregos</h4>
          </a>
        </div>
      
      </div>
    </div>
  );
}

export default Navbar;