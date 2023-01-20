import { Link } from 'react-router-dom'

export default function Logout() {
    const baseUrl = import.meta.env.VITE_BASE_URL

    async function postFetch() {
        await fetch(`${import.meta.env.VITE_BASE_URL}/logout`, {
            method: 'GET',
            credentials: 'include',
        })
    }

    function handleClick(e) {
        e.preventDefault()
        postFetch()
    }

    async function handleTest(e) {
        e.preventDefault()
        const resp = await fetch(`${import.meta.env.VITE_BASE_URL}/test`, {
            method: 'GET',
            credentials: 'include',
        })
    }

    return(
        <div>
            <button onClick={(e) => handleClick(e)}>Logout</button>
            <button onClick={(e) => handleTest(e)}>Test Session</button>
            <Link to="/login">Login</Link>
        </div>
    )
}