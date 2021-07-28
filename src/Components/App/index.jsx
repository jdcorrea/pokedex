import React from "react";
import { Route, Switch } from "react-router-dom";
// import BackGroundImg from "../BackGroundImg";
import Pokedex from "../../pages/Pokedex";
import Pokemon from "../../pages/Pokemon";
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pokedex} />
      <Route path="/pokemon/:id" 
        render={(props) => (
          <Pokemon {...props} />
        )}
      />
    </Switch>
  );
}

export default App;
