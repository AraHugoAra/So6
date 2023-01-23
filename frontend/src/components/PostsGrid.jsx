import React, { useState, useEffect} from 'react';

const PostsGrid = () => {
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [posts, setPosts] = useState()

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
        const URL = import.meta.env.VITE_BASE_URL + "/posts"
        fetchPosts(URL)
    },[])

    // user and user's posts
    return (
      <div className="row">
        <div className="column">
        {loading === false &&
          posts !== null &&
          posts.map((post) => (
              <img
                key={post.id}
                className="post-grid__image"
                src={post.media}
                alt={'image n°' + post.id}
              />
              ))}
              </div>
      </div>
    );
}

export default PostsGrid;
