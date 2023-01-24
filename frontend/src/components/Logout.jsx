import { useNavigate } from 'react-router-dom'

import Chat from "./../assets/icons/information.svg";

export default function Logout() {

const navigate = useNavigate()

    async function postFetch() {
        await fetch(`${import.meta.env.VITE_BASE_URL}/logout`, {
            method: 'GET',
            credentials: 'include',
        })
        navigate('/login')
    }

    function handleClick(e) {
        e.preventDefault()
        postFetch()
    }

    return(
        <img src={Chat} onClick={(e) => handleClick(e)} />
    )
}