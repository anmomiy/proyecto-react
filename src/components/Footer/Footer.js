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
                <a href="http://www.instagram.com" target="_blank"><img alt="insta" src="./logo-instagram.png"/> Instagram</a>
                <a href="http://www.facebook.com" target="_blank"><img alt="facebook" src="./facebook-icono.png"/> Facebook</a>
                <a href="http://www.whatsapp.com" target="_blank"><img alt="whatsapp" src="./whatsapp-icono.png"/> Whatsapp</a>
            </div>
        </div>
        <div className="footer-copyright">
            <h3>&copy; Copyright 2022</h3>
        </div>
        </div>
    )
}

export default Footer