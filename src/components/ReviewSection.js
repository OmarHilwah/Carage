// import React, { useState } from "react";
// import "./ReviewSection.css";

// function ReviewSection() {
//   const [showNewPost, setShowNewPost] = useState(false);

//   return (
//     <>
//       <section className="main-review"> Your Opnion Matters</section>
//       {showNewPost ? (
//         <div className="postSection">
//           <input
//             className="userPost"
//             type="text"
//             placeholder="your name"
//           ></input>
//           <input
//             className="userComment"
//             type="text"
//             placeholder="your comment"
//           ></input>
//         </div>
//       ) : (
//         <button>Add a review</button>
//       )}
//     </>
//   );
// }

// export default ReviewSection;

import React, { useState } from "react";
import axios from "axios";
import "./ReviewSection.css";

const API_BASE_URL = "http://localhost:5000";

function ReviewSection() {
  const [showNewPost, setShowNewPost] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddReview = async () => {
    try {
      await axios.post(`${API_BASE_URL}/posts`, {
        content: comment,
        author: name,
      });
      setName("");
      setComment("");
      // You can add additional logic here to handle successful review submission
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <>
      <section className="main-review">Your Opinion Matters</section>
      {showNewPost ? (
        <div className="postSection">
          <input
            className="userPost"
            type="text"
            placeholder="your name"
            value={name}
            onChange={handleNameChange}
          ></input>
          <input
            className="userComment"
            type="text"
            placeholder="your comment"
            value={comment}
            onChange={handleCommentChange}
          ></input>
          <button onClick={handleAddReview}>Submit Review</button>
        </div>
      ) : (
        <button onClick={() => setShowNewPost(true)}>Add a review</button>
      )}
    </>
  );
}

export default ReviewSection;
