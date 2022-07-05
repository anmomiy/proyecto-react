import {addDoc, collection} from 'firebase/firestore'
import db from '../data/ItemCollection'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Contact = () =>{
    const [flag, setFlag] = useState(true)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        comment: ''
    })
    const handleChange = (e) =>{
        setFormValue({...formValue, [e.target.name]: e.target.value})
         
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        saveData( {contactInfo: formValue, date: new Date().toLocaleDateString('es-MX')})
        setFlag(false)

    }
    const saveData = async (newContact) =>{
        const contactFirebase = collection(db, 'contacto')
        const contactDoc = await addDoc(contactFirebase, newContact)
        console.log(contactDoc)
    }
    return(
        <div>
            <div className='contact-sns'>
                <h2>¡Estas son nuestras redes sociales!</h2>
                <div>
                <a href="www.instagram.com"><img alt="insta" src="./logo-instagram.png"/> Instagram</a>
                <a href="www.facebook.com"><img alt="facebook" src="./facebook-icono.png"/> Facebook</a>
                <a href="www.whatsapp.com"><img alt="whatsapp" src="./whatsapp-icono.png"/> Whatsapp</a>
                </div>
            </div>
            <div>
                {flag ?
                <div>
                <h2>¡Déjanos tu comentario y nos contactaremos contigo!</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <TextField
                        required
                        id="outlined-required"
                        label="Nombre y Apellido"
                        name="name"
                        value={formValue.name}
                        onChange={handleChange}
                        
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        name="email"
                        value={formValue.email}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Teléfono"
                        name="phone"
                        value={formValue.phone}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Comentario"
                        name="comment"
                        multiline
                        rows={3}
                        value={formValue.comment}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" >Enviar</Button>
                </form>
                </div>
                :
                <div className="contact-end">
                <h2>Gracias por escribirnos. En 48 horas nos pondremos en contacto por correo. </h2>
                <Link to="/"><Button variant="contained">Ir a comprar</Button></Link>
                </div>    
                }
                
            </div>
        </div>
    )
}

export default Contact;