import { Link } from 'react-router-dom'

export default function Logout() {

    async function postFetch() {
        await fetch('http://localhost:4000/logout', {
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
        const resp = await fetch('http://localhost:4000/test', {
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