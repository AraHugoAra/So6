export default function Signup() {
    const baseUrl = import.meta.env.VITE_BASE_URL

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
        postFetch(body)
        e.target.reset()
    }

    return(
        <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
            <label className="signup-form__label" htmlFor="email">Email:</label>
            <input className="signup-form__input" type="email" id="email"/>
            <label className="signup-form__label" htmlFor="userName">Nom complet:</label>
            <input className="signup-form__input" type="text" id="userName"/>
            <label className="signup-form__label" htmlFor="nickname">Pseudo:</label>
            <input className="signup-form__input" type="text" id="nickname"/>
            <label className="signup-form__label" htmlFor="password">Mot de passe:</label>
            <input className="signup-form__input" type="password" id="password"/>
            <label className="signup-form__label" htmlFor="avatar">Avatar:</label>
            <input className="signup-form__input" type="text" id="avatar"/>
            <button className="signup-form__button" type="submit">Se connecter</button>
        </form>
    )
}