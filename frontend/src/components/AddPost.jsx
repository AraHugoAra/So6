import { Link, useNavigate, useParams } from 'react-router-dom'
import UploadWidget from '../services/UploadWidget'
import { useState } from 'react'
import close from '../assets/icons/close.png'

export default function Signup() {
    const [ imageUploaded, setImageUploaded ] = useState(null)
    const navigate = useNavigate()

    async function postFetch(body) {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/newpost`, {
            method: 'POST',
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
        const json = await response.json()
        console.log(json)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const body = {
            vegan: e.target.elements.vegan.value,
            body: e.target.elements.description.value,
            media: imageUploaded,
        }
            // console.log(body)
            postFetch(body)
            e.target.reset()
            navigate('/')
        }

    return(
        <div className="container">
            <Link className="modal__post--close" to="/">
                <img src={close} alt="get back" />
            </Link>
            <div className="new-post__form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <UploadWidget 
                        label="Ajouter une image" 
                        description={"Votre image:"} 
                        imageUploaded={imageUploaded} 
                        setImageUploaded={setImageUploaded}
                        style="big"
                    />
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" placeholder='(optionnel)'/>
                    <label htmlFor="vegan">Vegan?</label>
                    <select defaultValue={0} id="vegan">
                        <option value={1}>
                            Oui
                        </option>
                        <option value={0}>
                            Non
                        </option>
                    </select>
                    <button type="submit">Poster</button>
                </form>
            </div>
        </div>
    )
}