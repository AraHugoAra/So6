import logo from '../assets/icons/So6_logo_light.svg'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import Footer from './Footer'
import UploadWidget from '../services/UploadWidget'
import { useState } from 'react'

export default function Signup() {
    const [ imageUploaded, setImageUploaded ] = useState(null)
    const navigate = useNavigate()
    const { data, error, loading } = useFetch('api/auth', null, [])

    useEffect(() => {
        data?.status === 200 && navigate('/')
    }, [data])

    async function postFetch(body) {
        await fetch(`${import.meta.env.VITE_BASE_URL}/users/create`, {
            method: 'POST',
            credentials: 'include',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const body = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
            name: e.target.elements.userName.value,
            nickname: e.target.elements.nickname.value,
            avatar: imageUploaded,
        }
        if(body.password !== e.target.elements.passwordConfirm.value) {
            console.log('if')
            alert('Vérifiez votre mot de passe.')
        }
        else {
            console.log('else')
            postFetch(body)
            e.target.reset()
            navigate('/login')
        }
    }

    return(
        !loading && !error &&
        <>
            <div className="container signup">
                <div className="signup__logo">
                    <img src={logo} alt="so6-logo" />
                    <p className='signup__flavour-text' >Inscrivez-vous pour voir les photos et vidéos de vos amis.</p>
                </div>
                <div className="signup__form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {/* <label htmlFor="avatar">Avatar:</label>
                        <input type="text" id="avatar" placeholder='(optionnel)'/> */}
                        <UploadWidget 
                            label="Choisir un avatar" 
                            description={"Votre avatar:"} 
                            imageUploaded={imageUploaded} 
                            setImageUploaded={setImageUploaded}
                            style="medium"
                        />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required/>
                        <label htmlFor="userName">Nom complet:</label>
                        <input type="text" id="userName" placeholder='(optionnel)'/>
                        <label htmlFor="nickname">Pseudo:</label>
                        <input type="text" id="nickname" required/>
                        <label htmlFor="password">Mot de passe:</label>
                        <input type="password" id="password" required/>
                        <label htmlFor="passwordConfirm">Confirmer mot de passe:</label>
                        <input type="password" id="passwordConfirm" required/>
                        <button type="submit">S'inscrire</button>
                    </form>
                    <Link className='form__link' to="/login">Connectez-vous.</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}