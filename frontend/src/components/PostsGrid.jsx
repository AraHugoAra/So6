import React, { useState, useEffect, useInsertionEffect} from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import HandleImageError from '../services/HandleImageError';
import Avatar from './Avatar';
import UserProfile from './UserProfile';
import PostDetail from './PostDetail';

const PostsGrid = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { id } = useParams()
    const { data, loading, error } = useFetch(`users/${id}/posts`, null, [window.location.href]);

    function openModal(post_id) {
      setIsOpen(post_id);
    }
    function closeModal() {
      setIsOpen(null);
    }
    return (
      <>
        {!loading && !error && data.status === 200 && (
          <UserProfile
            key={data.posts[0]?.nickname}
            nickname={data.posts[0]?.nickname || localStorage.nickname}
            avatar={data.posts[0]?.avatar || localStorage.avatar}
          />
        )}
        <article className="posts-grid">
          <div className="posts-grid__row-images">
            {!loading && !error && (data.posts.length === 0 || !data.posts[0].media) ? (
              <>
                <div className="posts-grid__no-images">
                  <p className="posts-grid__no-images__text">
                    Pas d'images encore ? Postez-nous une petite saucisse pour
                    commencer !
                  </p>
                </div>
              </>
            ) : (
              <>
                {!loading &&
                  !error &&
                  data.posts.map((post) => (
                    <img
                      key={post.id}
                      className="posts-grid__image"
                      src={post.media}
                      alt={"image n°" + post.id}
                    />
                  ))}
              </>
            )}
          </div>
        </article>
      </>
    );
}

export default PostsGrid;
