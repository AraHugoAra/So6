import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import Like from "./Like";
import Comment from "./../assets/icons/salt-light-mode.svg";

const customStyles = {
  //   content: {
  //     top: "0%",
  //     left: "0%",
  //     right: "0%",
  //     bottom: "0%",
  //     backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   },
};

Modal.setAppElement("#root");

export default function PostDetail({ media, postId, modalIsOpen, setIsOpen }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  async function fetchPost(url) {
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

  async function fetchComments(url) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setComments(json.comments);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  async function fetchModal() {
    const urlPost = import.meta.env.VITE_BASE_URL + "/posts/" + postId;
    await fetchPost(urlPost);

    const urlComments =
      import.meta.env.VITE_BASE_URL + "/posts/" + postId + "/comments";
    await fetchComments(urlComments);
  }

  function afterOpenModal() {
    fetchModal();
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <img onClick={openModal} src={media} alt="image de saucisse postée" />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal__post">
          <button onClick={closeModal}>close</button>
          {!loading && !error && post && (
            <div className="post">
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
                <img src={post.media} alt="image de saucisse postée" />
              </div>
              <div className="post__buttons">
                <div>
                  <Like target_id={post.id} target_type={0} />
                </div>
                <img src={Comment} />
              </div>
              <div className="post__text">
                <p className="post__text body">{post.body}</p>
                <div className="post__comments">
                  {!loading &&
                    !error &&
                    comments &&
                    comments.map((comment) => (
                      <div className="comment" key={comment.id}>
                        <div className="comment__info">
                          <div
                            // Attention double class en attendant de finaliser le style de comment__user
                            className="comment__user post__user"
                          >
                            <img
                              className="comment__user--avatar avatar"
                              src={post.avatar || "./../../public/favicon.ico"}
                              alt="avatar"
                            />
                            <p className="comment__user--nickname">
                              {comment.nickname}:&nbsp;
                            </p>
                          </div>
                          <div className="comment__body">
                            <p>{comment.body}</p>
                          </div>
                        </div>
                        <div className="comment__like">
                          <Like target_id={comment.id} target_type={1} />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
