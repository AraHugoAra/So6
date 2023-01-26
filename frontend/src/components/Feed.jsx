import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

import Like from "./Like";
import PostDetail from "./PostDetail";

import Comment from "./../assets/icons/salt-light-mode.svg";

export default function Feed({}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState(null)

  const { data, loading, error } = useFetch("posts", {}, [modalIsOpen]);

  function openModal(post_id) {
    setIsOpen(true);
    setPostId(post_id)
  }
  function closeModal() {
    setIsOpen(false);
    setPostId(null)
  }

    return (
      <div className="feed container--post">
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
                  />
                </Link>
                <div className="post__user__text">
                  <Link className="post__link" to={`/users/${post.user_id}`}>
                    <p className="post__user__text__nickname">{post.nickname}</p>
                  </Link>
                    <p className="post__user__text__body body">{post.body}</p>
                    
                </div>
              </div>
              <div className="post__media">
                <img onClick={(e) => openModal(post.id)} src={post.media} alt="image de saucisse postée" />
                <PostDetail
                  post_id={postId}
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                />
              </div>
              <div className="post__buttons">
                <div className="post__buttons__like">
                  <Like target_id={post.id} target_type={0} />
                </div>
                <button onClick={(e) => openModal(post.id)}>
                  <img src={Comment} alt="Commenter"/>
                </button>
              </div>
              <button onClick={(e) => openModal(post.id)}>
                <p className="comments">
                  Voir les commentaires...
                </p>
              </button>
            </div>
          ))}
      </div>
    );
}