import React from "react";
import { Route, Switch } from "react-router-dom";
import Pokedex from "../../pages/Pokedex";
import Pokemon from "../../pages/Pokemon";
import NotFound from "../../pages/NotFound";
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
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
