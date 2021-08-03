import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pokedex from "../../pages/Pokedex";
import Pokemon from "../../pages/Pokemon";
import NotFound from "../../pages/NotFound";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route path="/pokemon/:id" component={Pokemon}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
