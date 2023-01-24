import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

import Like from "./Like";
import PostDetail from "./PostDetail";

import Comment from "./../assets/icons/salt-light-mode.svg";

export default function Feed({}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { data, loading, error } = useFetch("posts", {}, [modalIsOpen]);

  return (
    <div className="feed">
      {!loading &&
        !error &&
        data.posts &&
        data.posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="post__user">
              <Link className="post__link" to={`/users/${post.user_id}`}>
                <img
                  className="post__user__avatar avatar"
                  src={post.avatar || "./../../public/favicon.ico"}
                  alt="avatar"
                />
              </Link>
              <Link className="post__link" to={`/users/${post.user_id}`}>
                <div className="post__user__nickname">{post.nickname}</div>
              </Link>
            </div>
            <div className="post__media">
              <PostDetail
                media={post.media}
                postId={post.id}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
              />
            </div>
            <div className="post__buttons">
              <Like target_id={post.id} target_type={0} />
              <img src={Comment} />
            </div>
            <div className="post__text">
              <p className="post__text body">{post.body}</p>
              <p className="post__text comments">Voir les commentaires...</p>
            </div>
          </div>
        ))}
    </div>
  );
}
