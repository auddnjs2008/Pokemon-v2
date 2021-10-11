import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [pokemon, setPokemon] = useState(
    localStorage.getItem("myPoketmon")
      ? JSON.parse(localStorage.getItem("myPoketmon")!)
      : ""
  );
  const [colorArray, setColor] = useState<number[]>([]);

  return (
    <HomePresenter
      pokemon={pokemon ? pokemon : ""}
      setPokemon={setPokemon}
      colorArray={colorArray}
      setColor={setColor}
    ></HomePresenter>
  );
};

export default HomeContainer;
