import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import Like from "./Like";
import Comments from "./Comments";

import commentIMG from "./../assets/icons/salt-light-mode.svg";
import veganIMG from "./../assets/icons/vegetalien.png";
import close from "./../assets/icons/close.png";
import AuthChecker from "../services/AuthChecker";

const customStyles = {
  content: {
    top: '10%',
    left: '5%',
    right: '5%',
    bottom: '5%',
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

export default function PostDetail({postId,modalIsOpen, closeModal }) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchPost(url) {
    if(modalIsOpen) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setPost(json.post[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
}

  function afterOpenModal() {
    const urlPost = import.meta.env.VITE_BASE_URL + "/posts/" + postId;
    fetchPost(urlPost);
  }

  return (
    <div>
      {modalIsOpen &&
      <AuthChecker>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Post details"
        >
          {/* <div className="modal__post container--post"> */}
            {!loading && !error && post && (
              <div className="post--modal">
                <div className="post__header">
                  <div className="post__user">
                    <Link className="post__link" to={`/users/${post.user_id}`}>
                      <img
                        className="post__user__avatar avatar"
                        src={post.avatar || "/favicon.ico"}
                      />
                    </Link>
                    <div className="post__user__text">
                      <Link className="post__link" to={`/users/${post.user_id}`}>
                        <p className="post__user__text__nickname">
                          {post.nickname}
                        </p>
                      </Link>
                      <p className="post__user__text__body body">{post.vegan === 1 && <img className="post__vegan" src={veganIMG} />}{post.body}</p>
                    </div>
                  </div>
                  <button className="modal__post--close" onClick={closeModal}>
                    <img src={close} alt="fermer" />
                  </button>
                </div>
                <img
                  className="modal__media"
                  src={post.media}
                  alt="image de saucisse postée"
                />
                <div className="post__buttons">
                  <div>
                    <Like target_id={post.id} target_type={0} />
                  </div>
                  <label form="addcommentform" htmlFor="addcomment">
                    <img src={commentIMG} title="Ajoutez votre grain de sel" />
                  </label>
                </div>
                <Comments postId={postId} />
              </div>
            )}
          {/* </div> */}
        </Modal>
      </AuthChecker>}
    </div>
  );
}
