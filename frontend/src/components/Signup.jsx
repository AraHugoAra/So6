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
        <div className="container">
            <div className="signup__logo">
                <img src="./assets/logo" alt="so6-logo" />
            </div>
            <div className="signup__form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>
                    <label htmlFor="userName">Nom complet:</label>
                    <input type="text" id="userName"/>
                    <label htmlFor="nickname">Pseudo:</label>
                    <input type="text" id="nickname"/>
                    <label htmlFor="password">Mot de passe:</label>
                    <input type="password" id="password"/>
                    <label htmlFor="avatar">Avatar:</label>
                    <input type="text" id="avatar"/>
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
            <footer className="signup__footer">

            </footer>
        </div>
    )
}