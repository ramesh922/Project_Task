import React from "react";
import "./CommentCard.css";

const CommentCard = ({ commentId }) => {
  const [commentDetails, setCommentDetails] = React.useState();
  React.useEffect(() => {
    async function fetchData() {
      var response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
      );
      var body = await response.json();
      setCommentDetails(body);
    }
    fetchData();
  }, [commentId]);

  return (
    commentDetails !== undefined && (
      <div className="comment-box">
        <div className="comment-author">Comment by: {commentDetails.by}</div>
        <div>{commentDetails.text}</div>
      </div>
    )
  );
};

export default CommentCard;
