import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function AuthChecker({ children }) {
    const navigate = useNavigate()
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        async function fetchAuth() {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth`, {
                method: 'GET',
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
            })
            if(response.status === 200) {
                setIsAuthenticated(true)
                setLoading(false)
            }
            else {
                setIsAuthenticated(false)
                navigate('/login')
                setLoading(false)
            }
        }
        fetchAuth()
    }, [])

    return (
        !loading && (
            <>
                { children }
            </>
        )
    )


}