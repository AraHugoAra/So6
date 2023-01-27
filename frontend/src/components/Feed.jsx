import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

import Posts from "./Posts";
import ToggleSwitch from "./ToggleSwitch";
import Comment from "./../assets/icons/salt-light-mode.svg";

import veganIMG from "./../assets/icons/vegetalien.png";


export default function Feed({}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [veganPosts, setVeganPosts] = useState([])
  const [veganMode, setVeganMode] = useState(false)

  const { data, loading, error } = useFetch("posts", {}, [modalIsOpen]);

  
  function closeModal() {
    setIsOpen(null);
  }


  useEffect(() => {
    !loading && setVeganPosts(data.posts.filter(post => post.vegan))
  },[loading])

  return (
    <div className="feed container--post">
      <div className="feed__vegan-mode">
      <img className="feed__vegan-mode" src={veganIMG} />
        <ToggleSwitch comp="veganMode" setVeganMode={setVeganMode}/>
      </div>
      
      {(!loading && !error) &&
        ( veganMode ? <Posts posts={veganPosts} modal={false} modalIsOpen={modalIsOpen} closeModal={closeModal} setIsOpen={setIsOpen}/>
        : <Posts posts={data.posts} modal={false} modalIsOpen={modalIsOpen} closeModal={closeModal} setIsOpen={setIsOpen}/>
        )}
    </div>
  );
}
