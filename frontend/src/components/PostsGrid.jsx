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
        return () => {
          // needs to be stoped
        }

    },[posts])

    const userNickname = localStorage.getItem('nickname')

    // user and user's posts
    return (
      <article className="posts-grid">
        <div className="posts-grid__row-images">
          {(loading === false &&
            posts !== null) &&
            posts.map((post) => (
              (post.nickname === userNickname) &&
              <img
                key={post.id}
                className="posts-grid__image"
                src={post.media}
                alt={"image n°" + post.id}
              />
            ))}
        </div>
      </article>
    );
}

export default PostsGrid;
