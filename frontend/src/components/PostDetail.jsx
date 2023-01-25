import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import Like from "./Like";
import Comment from "./../assets/icons/salt-light-mode.svg";

const customStyles = {
  content: {
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

export default function PostDetail({ post_id, modalIsOpen, closeModal }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
    const urlPost = import.meta.env.VITE_BASE_URL + "/posts/" + post_id;
    await fetchPost(urlPost);

    const urlComments =
      import.meta.env.VITE_BASE_URL + "/posts/" + post_id + "/comments";
    await fetchComments(urlComments);
  }

  function afterOpenModal() {
    fetchModal();
  }

  

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
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
                  />
                </Link>
                <div className="post__user__text">
                  <Link className="post__link" to={`/users/${post.user_id}`}>
                    <p className="post__user__text__nickname">
                      {post.nickname}
                    </p>
                  </Link>
                  <p className="post__user__text__body body">{post.body}</p>
                </div>
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
                <img src={Comment} />
              </div>
              <div className="post__comments">
                {!loading &&
                  !error &&
                  comments &&
                  comments.map((comment) => (
                    <div className="commentDetails" key={comment.id}>
                      <div className="commentDetails__info">
                        <div className="commentDetails__info--user">
                          <Link
                            className="post__link"
                            to={`/users/${post.user_id}`}
                          >
                            <img
                              className="avatar"
                              src={
                                comment.avatar || "./../../public/favicon.ico"
                              }
                            />
                          </Link>
                          <Link
                            className="post__link"
                            to={`/users/${comment.user_id}`}
                          >
                            <p className="commentDetails__info--nickname">
                              {comment.nickname}
                            </p>
                          </Link>
                        </div>
                        <div className="commentDetails__body">
                          <p>{comment.body}</p>
                        </div>
                      </div>
                      <div className="commentDetails__like">
                        <Like target_id={comment.id} target_type={1} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
