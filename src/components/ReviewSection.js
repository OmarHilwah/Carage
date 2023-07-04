import React, { useState } from "react";
import "./ReviewSection.css";

function ReviewSection() {
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <>
      <section className="main-review"> Your Opnion Matters</section>
      {showNewPost ? (
        <div className="postSection">
          <input
            className="userPost"
            type="text"
            placeholder="your name"
          ></input>
          <input
            className="userComment"
            type="text"
            placeholder="your comment"
          ></input>
        </div>
      ) : (
        <button>Add a review</button>
      )}
    </>
  );
}

export default ReviewSection;
