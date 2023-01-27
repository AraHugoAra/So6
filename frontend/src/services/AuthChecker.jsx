import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function AuthChecker({ children }) {
    console.log('AuthChecker de: ', children._source?.fileName.split('/').slice(-1))
    const navigate = useNavigate()
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        async function fetchAuth() {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: { "Content-Type": "application/json" },
                })
                const json = await response.json()
                if(json.status === 200) {
                    setIsAuthenticated(true)
                    setLoading(false)
                }
                else {
                    setIsAuthenticated(false)
                    navigate('/login')
                    setLoading(false)
                }
            } catch (error) {
                console.log('AuthChecker error: ', error)
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