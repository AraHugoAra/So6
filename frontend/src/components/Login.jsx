import { Link } from 'react-router-dom'

export default function Login() {
    const baseUrl = import.meta.env.VITE_BASE_URL

    async function postFetch(body) {
        await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: { "Content-Type": "application/json",
         },
            body: JSON.stringify(body),
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const body = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        postFetch(body)
        // e.target.reset()
    }

    async function handleTest() {
        const resp = await fetch(`${import.meta.env.VITE_BASE_URL}/test`, {
            method: 'GET',
            credentials: 'include',
        })
        // console.log(resp)
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <label htmlFor="email">email</label>
                <input type="email" id="email"/>
                <label htmlFor="password">password</label>
                <input type="password" id="password"/>
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => handleTest()}>Test Login</button>
            <Link to="/logout">Logout</Link>
        </div>
    )
}