import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id }) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((response) => response.body)
      .then((rb) => {
        const reader = rb.getReader();

        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                  //console.log("done", done);
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                //console.log(done, value);
                push();
              });
            }

            push();
          },
        });
      })
      .then((stream) => {
        // Respond with our stream
        return new Response(stream, {
          headers: { "Content-Type": "text/html" },
        }).json();
      })
      .then((result) => {
        // Do things with result
        setData(result);
      });
  }, [id]);

  return (
    data !== undefined && (
      <Link
        className="card-link"
        to={{
          pathname: `/story-details`,
          state: { story: data },
        }}
      >
        <div className="custom-card">
          <div className="title">{data.title}</div>
          <div className="author">Author: {data.by}</div>
          <div>Score: {data.score}</div>
          <button
            className="btn btn-secondary button"
            onClick={(event) => {
              event.preventDefault();
              window.location.href = data.url;
            }}
          >
            Read the article
          </button>
        </div>
      </Link>
    )
  );
};

export default Card;
