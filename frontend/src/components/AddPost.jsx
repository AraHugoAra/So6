import { Link, useNavigate } from 'react-router-dom'
import UploadWidget from '../services/UploadWidget'
import { useState } from 'react'
import close from '../assets/icons/close.png'
import logo from '../assets/icons/So6_logo_light.svg'
import ToggleSwitch from './ToggleSwitch'

export default function Signup() {
    const [ imageUploaded, setImageUploaded ] = useState(null)
    const [ checked, setChecked ] = useState(false)
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
            vegan: checked ? 1 : 0,
            body: e.target.elements.description.value,
            media: imageUploaded,
        }
            postFetch(body)
            e.target.reset()
            navigate('/')
        }

    return(
        <div className="container--new-post new-post">
            <Link className='new-post__close' to="/">
                <img src={close} alt="get back" />
            </Link>
            <div className="new-post__logo">
                <img src={logo} alt="so6-logo" />
                <p className='new-post__flavour-text' >Qu'allez-vous partager de bon avec vos amis aujourd'hui ?</p>
            </div>
            <div className="new-post__form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <UploadWidget 
                        label="Téléverser une image" 
                        description={"Votre image:"} 
                        imageUploaded={imageUploaded} 
                        setImageUploaded={setImageUploaded}
                        style="big"
                    />
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" placeholder='(optionnelle)'/>
                    {/* <div className="new-post__checkbox">
                        <label htmlFor="vegan">Vegan?</label>
                        <input type="checkbox" id="vegan" />
                    </div> */}
                    <ToggleSwitch comp="checkbox" setVeganMode={setChecked} />
                    <button type="submit">Partager</button>
                </form>
            </div>
        </div>
    )
}