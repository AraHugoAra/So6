import { Link } from "react-router-dom";

import Like from "./Like";
import PostDetail from "./PostDetail";

import Comment from "./../assets/icons/salt-light-mode.svg";
import veganIMG from "./../assets/icons/vegetalien.png";

export default function Posts({posts, modalIsOpen, closeModal, setIsOpen}) {
  function openModal(post_id) {
    setIsOpen(post_id);
  }

    return(
        <>
        {posts.map((post) => (
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
                  <p className="post__user__text__body body"> {post.vegan === 1 && <img className="post__vegan" src={veganIMG} />}{post.body}</p>
                </div>
              </div>
                <img
                  onClick={(e) => openModal(post.id)}
                  className="post__media"
                  src={post.media}
                  alt="image de saucisse postée"
                />
  
                <PostDetail
                  postId={modalIsOpen}
                  modalIsOpen={post.id===modalIsOpen}
                  closeModal={closeModal}
                />
              <div className="post__buttons">
                <div className="post__buttons__like">
                  <Like target_id={post.id} target_type={0} />
                </div>
                <button onClick={(e) => openModal(post.id)}>
                  <img src={Comment} alt="Commenter" />
                </button>
              </div>
              <button onClick={(e) => openModal(post.id)}>
                <p className="comments">Voir les commentaires...</p>
              </button>
            </div>))}
        </>
    )
}