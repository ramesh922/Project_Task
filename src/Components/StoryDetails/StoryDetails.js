import React from "react";
import { withRouter } from "react-router-dom";
import Comments from "./Comments/Comments";
import "./StoryDetails.css";

const StoryDetails = (props) => {
  const details = props.location.state.story;
  return details !== undefined ? (
    <>
      <div className="container">
        <div className="details-header">
          <div>
            <div>Title: {details.title}</div>
            <div>Author: {details.by}</div>
            <div className="read-comments-text">Read comments below</div>
          </div>
        </div>

        <Comments comments={details.kids} />
      </div>
    </>
  ) : null;
};

export default withRouter(StoryDetails);
