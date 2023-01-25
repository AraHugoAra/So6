import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/icons/So6_logo_light.svg'
import { AuthContext } from '../context/AuthContext'
import useFetch from '../hooks/useFetch'
import { UserContext } from '../context/UserContext'

export default function Login() {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    
    const { data, error, loading } = useFetch('api/auth', null, [])

    useEffect(() => {
        data?.status === 200 && navigate('/')
    }, [data])

    async function postFetch(e, body) {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            const json = await response.json()
            if (json.status === 200) {
                setUser({
                    avatar: json.session.user[0].avatar,
                    nickname: json.session.user[0].nickname,
                })
                // console.log(json.session.user[0].nickname);
                e.target.reset()
                navigate('/')
            }
            else {
                alert('Vérifiez vos identifiants.')
            }
        }
        catch(error) {
            console.log('Login post error: ', error)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const body = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        postFetch(e, body)
    }

    return(
        !loading && !error &&
        <div className="container login">
            <div className="login__logo">
                <img src={logo} alt="so6-logo" />
                <p className='login__flavour-text' >Inscrivez-vous pour voir les photos et vidéos de vos amis.</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"/>
                <button type="submit">Se connecter</button>
            </form>
            <Link className='form__link' to="/signup">Inscrivez-vous.</Link>
        </div>
    )
}