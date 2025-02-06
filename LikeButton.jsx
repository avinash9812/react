import { useState } from "react";
export default function LikeButton() {
  let [isliked, setisLiked] =useState(false);



let toggleLike = () => {
  setisLiked(!isliked);
  

  
  console.log("liked");
  
}



  return (
    <div>
      <p onClick={toggleLike}>
        like the post 
        <br /><br />
        {isliked ? "❤️" : "♡"}
      </p>
    </div>
  );
}
