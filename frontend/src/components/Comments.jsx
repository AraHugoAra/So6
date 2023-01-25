import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Like from "./Like";

export default function Comments({ post_id }) {
  const [comments, setComments] = useState(null);
  const [updating, setUpdating] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

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

  function fetchAddcomment(url, fetchParams) {
    setLoading(true);
    fetch(url, fetchParams)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setUpdating((u) => !u);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url =
      import.meta.env.VITE_BASE_URL + "/posts/" + post_id + "/comments/add";
    const fetchParams = {
      method: "POST",
      mode: "cors",
      cache: "default",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: e.target.elements.addcomment.value,
      }),
    };
    fetchAddcomment(url, fetchParams);
    e.target.reset()
  }

  useEffect(() => {
    const urlComments =
      import.meta.env.VITE_BASE_URL + "/posts/" + post_id + "/comments";
    fetchComments(urlComments);
  }, [updating]);

  return (
    <div>
      <div className="comments">
        {!loading &&
          !error &&
          comments &&
          comments.map((comment) => (
            <div className="commentDetails" key={comment.id}>
              <div className="commentDetails__info">
                <div className="commentDetails__info--user">
                  <Link className="post__link" to={`/users/${comment.user_id}`}>
                    <img
                      className="avatar"
                      src={comment.avatar || "./../../public/favicon.ico"}
                    />
                  </Link>
                  <Link className="post__link" to={`/users/${comment.user_id}`}>
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

      <div className="comments__add">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            id="addcomment"
            placeholder="Ajouter un commentaire"
            required={true}
          ></input>
          <button type="submit">Publier</button>
        </form>
      </div>
    </div>
  );
}
