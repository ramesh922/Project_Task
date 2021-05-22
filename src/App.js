import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Story from "./Components/Story/Story";
import Fallback from "./Components/Fallback/Fallback";
const StoryDetails = React.lazy(() =>
  import("./Components/StoryDetails/StoryDetails")
);

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Story />
          </Route>
          <Route path="/story-details">
            <Suspense fallback={<Fallback />}>
              <StoryDetails />
            </Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
