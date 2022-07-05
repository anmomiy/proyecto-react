//CSS
import "./InfoContainer.css"
const InfoContainer = ({title, content, image}) =>{
    return(
        <div className="info-container">
            <h3>{title}</h3>
            <div className="info">
            <img alt={image} src={`./${image}`} />
            <p>{content}</p>
            </div>
        </div>
    )
}

export default InfoContainer;