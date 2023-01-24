import Like from "./Like";

import useFetch from "../hooks/useFetch";

import Comment from "./../assets/icons/salt-light-mode.svg"

export default function Feed({}) {

    const { data, loading, error } = useFetch('posts', {}, [])

    return (
      <div className="feed">
        {!loading &&
          !error &&
          data.posts &&
          data.posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post__user">
                <img
                  className="post__user__avatar avatar"
                  src={post.avatar || "./../../public/favicon.ico"}
                />
                <div className="post__user__text">
                  <p className="post__user__text__nickname">{post.nickname}</p>
                  <p className="post__user__text__body body">{post.body}</p>
                </div>
              </div>
              <div className="post__media">
                <img src={post.media} />
              </div>
              <div className="post__buttons">
                <div className="post__buttons__like">
                  <Like target_id={post.id} target_type={0} />
                </div>
                <button>
                  <img src={Comment} alt='comment-icon'/>
                </button>
              </div>
              <div className="post__comments">
                <p className="post__comments comments">
                  Voir les commentaires...
                </p>
              </div>
            </div>
          ))}
      </div>
    );
}