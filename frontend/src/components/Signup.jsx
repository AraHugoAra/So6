import logo from '../assets/icons/So6_logo_light.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()

    async function postFetch(body) {
        await fetch(`${import.meta.env.VITE_BASE_URL}/users/create`, {
            method: 'POST',
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
            avatar: e.target.elements.avatar.value,
        }
        if(body.password !== e.target.elements.passwordConfirm.value) {
            alert('Vérifiez votre mot de passe.')
        }
        else {
            postFetch(body)
            e.target.reset()
            navigate('/')
        }
    }

    return(
        <div className="container signup">
            <div className="signup__logo">
                <img src={logo} alt="so6-logo" />
                <p className='signup__flavour-text' >Inscrivez-vous pour voir les photos et vidéos de vos amis.</p>
            </div>
            <div className="signup__form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required/>
                    <label htmlFor="userName">Nom complet:</label>
                    <input type="text" id="userName" placeholder='(optionnel)'/>
                    <label htmlFor="nickname">Pseudo:</label>
                    <input type="text" id="nickname"/>
                    <label htmlFor="avatar">Avatar:</label>
                    <input type="text" id="avatar" placeholder='(optionnel)'/>
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password"/>
                    <label htmlFor="password-confirm">Confirmer mot de passe:</label>
                    <input type="password" id="passwordConfirm"/>
                    <button type="submit">S'inscrire</button>
                </form>
                <Link className='form__link' to="/login">Connectez-vous.</Link>
            </div>
        </div>
    )
}