import { useEffect, useState } from "react";
import like from "./../assets/icons/Like-false-light.png";

export default function Like({target_id, target_type}) {
    const [isLiked, setIsLiked] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] =  useState(null)

    function fetchLike(url,fetchParams){
        setLoading(true)
        fetch(url, fetchParams)
            .then((res) =>{ 
                return res.json()
            })
            .then ((data) => {
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }

    function fetchIsLike(url,fetchParams){
        setLoading
        fetch(url, fetchParams)
            .then((res) =>{ 
                return res.json()
            })
            .then ((data) => {
                setIsLiked(data.isLiked)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }

    function handleLike(targetId, targetType) {
        console.log(targetId)
        const url = import.meta.env.VITE_BASE_URL + "/like"
        const fetchParams = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                target_id : parseInt( targetId),
                target_type : parseInt(targetType),
            })
        }
        fetchLike(url, fetchParams)
    }
    
    useEffect(() => {
        const url = import.meta.env.VITE_BASE_URL + "/isliked/" + target_type + "/" + target_id
        const fetchParams = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            credentials: "include",
            headers: { "Content-Type": "application/json" }
        }
        fetchIsLike(url, fetchParams)
    },[])
    
    return(
        <button onClick={() => handleLike(target_id,target_type)}>
            <img src={like}/>
        </button>
    )
}