import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Navigator from "../Routes/Navigator";
import Detail from "../Routes/Detail";
import Store from "../Routes/Store";
import MyPokemon from "../Routes/MyPokemon";
import MyBag from "../Routes/MyBag";
import Game from "../Routes/Game";
import CommonMap from "../Routes/Map/CommonMap";
import Doc from "../Routes/Doc";

export default () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/navi" exact component={Navigator} />
      <Route path="/navi/:id" component={Detail} />
      <Route path="/store" component={Store} />
      <Route path="/mine" component={MyPokemon} />
      <Route path="/bag" component={MyBag} />
      <Route path="/game" exact component={Game} />
      <Route path="/doc" component={Doc} />
      <Route path="/game:id" component={CommonMap} />
    </Router>
  );
};
