import React, { useState, useEffect, useInsertionEffect} from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Avatar from './Avatar';
import UserProfile from './UserProfile';

const PostsGrid = () => {
    const { id } = useParams()
    const { data, loading, error } = useFetch(`users/${id}/posts`, null, []);

    return (
      <>
        {!loading && !error && data.status === 200 && (
            <UserProfile
              // key={data.posts[0].nickname}
              nickname={data.posts[0].nickname}
              avatar={data.posts[0].avatar}
            />
        )}
        <article className="posts-grid">
          <div className="posts-grid__row-images">
            {!loading && !error &&
              data.posts.map((post) => (
                  <img
                    key={post.id}
                    className="posts-grid__image"
                    src={post.media}
                    alt={"image n°" + post.id}
                  />
              ))}
          </div>
        </article>
      </>
    );
}

export default PostsGrid;
