import { useEffect, useState } from "react";
import like from "./../assets/icons/Like-true.svg"
import dislike from "./../assets/icons/Like-false-light.png";

export default function Like({target_id, target_type}) {
    const [liked, setLiked] = useState(null)
    const [numberLike, setNumberLike] = useState()
    const [updating, setUpdating] = useState(null)
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
                setUpdating(u => !u)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }

    function fetchNumberLike(url,fetchParams){
        setLoading(true)
        fetch(url, fetchParams)
            .then((res) =>{ 
                return res.json()
            })
            .then ((data) => {
                setNumberLike(data.likes[0].number_of_like)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }

    function fetchIsLike(url,fetchParams){
        setLoading(true)
        fetch(url, fetchParams)
            .then((res) =>{ 
                return res.json()
            })
            .then ((data) => {
                setLiked({isLiked : data.isLiked, likeId : data.likeId})
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }

    function handleLike(targetId, targetType) {
        if(liked.isLiked){
            const url = import.meta.env.VITE_BASE_URL + "/dislike/" + liked.likeId
            const fetchParams = {
                method: 'DELETE',
                mode: 'cors',
                cache: 'default',
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            }
            fetchLike(url, fetchParams)
        } else{
            const url = import.meta.env.VITE_BASE_URL + "/like"
            const fetchParams = {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    target_id : parseInt(targetId),
                    target_type : parseInt(targetType),
                })
            }
            fetchLike(url, fetchParams)
        }
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
    },[updating])

    useEffect(() => {
        const url = import.meta.env.VITE_BASE_URL + "/likes/" + target_type + "/" + target_id
        const fetchParams = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            credentials: "include",
            headers: { "Content-Type": "application/json" }
        }
        fetchNumberLike(url, fetchParams)
    },[updating])
    
    return(
        <button onClick={() => handleLike(target_id,target_type)}>
            {liked?.isLiked ? 
                <img src={like}/> :
                <img src={dislike}/>    
            }
            <p>{numberLike} J'aime{numberLike > 1 && "s"}</p>
        </button>
    )
}