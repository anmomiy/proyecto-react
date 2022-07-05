import InfoContainer from "../components/InfoContainer/InfoContainer";

const AboutUs = () =>{
    return(
        <>
        <h1>Nosotros</h1>
        <InfoContainer title="Sobre Nosotros" content="Esta es una SPA ficticia de un negocio de venta de artículos para mascotas. Fue creado para el curso de React JS de Coderhouse por Adriana Momiy" image="gatito.jpg" />
        <InfoContainer title="Información Adicional" content="Las dependencias usadas son: react, react-router-dom, Firebase, Material UI, SweetAlert2 y Swiper." image="kitten-pc.jpg" />
        </>
    )
}

export default AboutUs;