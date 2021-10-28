import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../Routes/Home";
import Navigator from "../Routes/Navigator";
import Detail from "../Routes/Detail";
import Store from "../Routes/Store";
import MyPokemon from "../Routes/MyPokemon";
import MyBag from "../Routes/MyBag";
import Game from "../Routes/Game";
import YardMap from "../Routes/Map/YardMap";
import RockMap from "../Routes/Map/RockMap";
import WaterMap from "../Routes/Map/WaterMap";
import SkyMap from "../Routes/Map/SkyMap";
import ForestMap from "../Routes/Map/ForestMap";
import BossMap from "../Routes/Map/BossMap";
import IceMap from "../Routes/Map/IceMap";
import ElectricMap from "../Routes/Map/ElectricMap";
import FireMap from "../Routes/Map/FireMap";
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
      <Route path="/game/rockmap" component={RockMap} />
      <Route path="/game/watermap" component={WaterMap} />
      <Route path="/game/skymap" component={SkyMap} />
      <Route path="/game/forestmap" component={ForestMap} />
      <Route path="/game/bossmap" component={BossMap} />
      <Route path="/game/icemap" component={IceMap} />
      <Route path="/game/electricmap" component={ElectricMap} />
      <Route path="/game/firemap" component={FireMap} />
    </Router>
  );
};
