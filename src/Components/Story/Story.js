import React from "react";

import Card from "../Card/Card";

import "./Story.css";

const Story = () => {
  const [topCards, setTopCards] = React.useState();
  React.useEffect(() => {
    let allStories = [];
    async function fetchData() {
      var response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      var body = await response.json();
      for (let i of body) {
        allStories.push(i);
      }
      var topStories = allStories.slice(0, 20);
      setTopCards(topStories);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="header-text">Collection of amazing articles/blogs</div>
      </div>
      <div className="card-parent">
        {topCards !== undefined &&
          topCards.map((story) => {
            return (
              <div className="cards-list" key={story}>
                <Card id={story} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Story;
