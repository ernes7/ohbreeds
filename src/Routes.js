import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import DogPage from "./pages/DogPage"
import Home from "./pages/Home"

  export default function App() {
    const [breedSelected, setBreed] = React.useState('');

    return (
      <Router>
        <Switch>
          <Route exact path="/:slug" >
            <DogPage breedSelected={breedSelected} />
          </Route>
          <Route exact path="/">
            <Home setBreed={setBreed} breedSelected={breedSelected} />
          </Route>
        </Switch>
      </Router>
    );
  }