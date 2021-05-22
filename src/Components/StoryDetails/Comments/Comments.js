import React from "react";

import CommentCard from "./CommentCard/CommentCard";

const Comments = ({ comments }) => {
  return (
    comments !== undefined && (
      <div className="comments-section">
        <div>
          {comments.map((comment) => {
            return <CommentCard commentId={comment} key={comment} />;
          })}
        </div>
      </div>
    )
  );
};

export default Comments;
