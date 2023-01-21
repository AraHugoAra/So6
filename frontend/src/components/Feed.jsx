import { useState, useEffect } from "react"

export default function Feed({}) {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] =  useState(null)

    function fetchPosts(url){
        fetch(url)
            .then((res) =>{ 
                return res.json()
            })
            .then ((data) => {
                setPosts(data.posts)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        const url = import.meta.env.VITE_BASE_URL + "/posts"
        fetchPosts(url)
    },[])

    return(
        <div className="feed">
            {loading === false && posts!== null && posts.map((post) => 
                <div 
                  className="post"
                  key={post.id}>
                    <div 
                      className="post__user">
                        <img className="post__user__avatar" src={post.avatar || "./../../public/favicon.ico"}/>
                        <div  className="post__user__nickname">{post.nickname}</div>
                    </div>
                    <div 
                      className="post__media">
                        <img src={post.media}/>
                    </div>
                    <div 
                      className="post__buttons">
                        <div>
                            {post.number_of_like}
                        </div>
                        <div>
                            J'aime
                        </div>
                        <div>
                            Commenter
                        </div>
                    </div>
                    <div 
                      className="post__text">
                        <p className="post__text body">{post.body}</p>
                        <p className="post__text comments">Voir les commentaires...</p>
                    </div>
                </div>
            )}
        </div>
    )
}