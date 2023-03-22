import { useEffect } from "react"
import { useState } from "react"

export default function useFetch(endpoint, params = {}, dependencies = null) {
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const fetchParams = {
        method: params?.method || 'GET',
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: params?.body || null
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, fetchParams);
                const json = await response.json();
                setData({status: response.status, json});
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
        }, dependencies)

    return { data, loading, error }
}