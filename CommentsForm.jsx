import { useState } from "react";
import './Comment.css'

export default function CommentsForm() {
  const [userName, setUserName] = useState("");            //username
  const [remarks, setRemarks] = useState("");              //remarks
  const [comments, setComments] = useState([]);            //for comments

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      userName: userName,
      remarks: remarks,
    };
    setComments([...comments, formData]);                //showing comments in display 
    setUserName("");
    setRemarks("");
    console.log("informations", formData);
    console.log("submitted");
  }

  function handleChange(event) {
    setUserName(event.target.value);
  }

  function handleRemarks(event) {
    setRemarks(event.target.value);
  }

  return (
    <div>
      <h2>Give a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="text"
          value={userName}
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          placeholder="Your remarks"
          type="text"
          value={remarks}
          onChange={handleRemarks}
        />
        <br />
        <br />
        <button type="submit"className="btn">Submit your comment please</button>
        <br /><br />
      </form>

      <div className="Comments">
        <h1>All Comments:</h1>
        <br />
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <h2>{comment.userName}</h2>
           <h3>: {comment.remarks}</h3> 
          </div>
        ))}
      </div>
    </div>
  );
}
