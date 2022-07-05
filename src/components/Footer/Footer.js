import { Link } from "react-router-dom"
import "./Footer.css"
const Footer = () =>{
    return(
        <div className="footer-container">
        <div className="footer-content">
            <div>
                <h3>Navegación</h3>
                <Link to="/">Inicio</Link>
                <Link to="/aboutus">Nosotros</Link>
                <Link to="/category/Perros">Perros</Link>
                <Link to="/category/Gatos">Gatos</Link>
                <Link to="/contact">Contacto</Link>
            </div>
            <div>
                <h3>Redes Sociales</h3>
                <a href="www.instagram.com"><img alt="insta" src="./logo-instagram.png"/> Instagram</a>
                <a href="www.facebook.com"><img alt="facebook" src="./facebook-icono.png"/> Facebook</a>
                <a href="www.whatsapp.com"><img alt="whatsapp" src="./whatsapp-icono.png"/> Whatsapp</a>
            </div>
        </div>
        <div className="footer-copyright">
            <h3>&copy; Copyright 2022</h3>
        </div>
        </div>
    )
}

export default Footer