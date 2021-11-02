import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Battle from "../../../Components/Battle";
import { Link } from "react-router-dom";
import Egg from "../../../Components/Egg";
import { ICommonMapPresenter } from "../../../types";
import { MapImage } from "../../../lib/imagesUrl";
import MapColors from "../../../lib/color";

const TestContainer = styled.div<{ imgKey: string }>`
  background-image: ${(props) => `url(${props.imgKey})`};
  background-size: cover;
  background-position: bottom center;
  width: 100%;
  /* height: 550px; */
`;

const MapContainer = styled.div<{ backColor: string }>`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(5, 20%);

  background-color: ${(props) => props.backColor};

  &.perspective {
    transform: perspective(600px) rotateX(73deg) translateY(38px);
    transform-style: preserve-3d;
    img:not(.road) {
      transform: rotateX(-50deg) translate3d(0, -50px, 0);
    }
  }
`;

const Navigation = styled.div`
  position: absolute;
  opacity: 0.7;
  bottom: 20px;
  right: 50px;
  z-index: 2;
  width: 100px;
  height: 100px;
  background-image: url("https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/compass.png");
  background-size: cover;
  background-position: center center;
  display: flex;
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff7675;
    color: white;
    opacity: 0;
  }
  &:hover {
    a {
      &:nth-child(1) {
        @keyframes move1 {
          0% {
          }
          100% {
            left: 0;
            opacity: 1;
          }
        }
        animation: move1 0.5s linear forwards;
      }
      &:nth-child(2) {
        @keyframes move2 {
          0% {
          }
          100% {
            top: 0;
            opacity: 1;
          }
        }
        animation: move2 0.5s linear forwards;
      }
    }

    div {
      &:nth-child(3) {
        @keyframes move3 {
          0% {
          }
          100% {
            top: 0;
            left: 0;
            opacity: 1;
          }
        }
        animation: move3 0.5s linear forwards;
      }
    }
  }
  transition: all 5s linear;
`;

const TreeWrapper = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: transparent;
`;

const RoadWrapper = styled.img<{ roadColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.roadColor};
`;
const Trainer = styled.img<{ position: number[]; windowSize: number[] }>`
  position: absolute;
  bottom: ${(props) =>
    props.position.length !== 0
      ? `${props.windowSize[1] - props.position[1] - 50}px`
      : "0"};
  left: ${(props) =>
    props.position.length !== 0 ? `${props.position[0]}px` : "50%"};
`;

const Pokemon = styled.img<{ random: number[] }>`
  position: absolute;
  top: ${(props) => (props.random ? `${props.random[1]}px` : "")};
  left: ${(props) => (props.random ? `${props.random[0]}px` : "")};
`;

const ThreeD = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 2;
  width: 100px;
  height: 30px;
  font-size: 15px;
`;

const EggWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 200vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  @keyframes windowColor {
    0% {
    }
    100% {
      background-color: #f1c40f;
    }
  }
  animation: windowColor 1s linear forwards;
  animation-iteration-count: 5;
`;

const Incense = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 1px solid black;
  opacity: 0;
  background-color: #ff7675;
  img {
    width: 35px;
    height: 35px;
  }
`;

const CommonMapPresenter: React.FC<ICommonMapPresenter> = ({
  map,
  trainer,
  bag,
  char,
  yard,
  charPosition,
  windowSize,
  frontMove,
  pokemon,
  randomPosition,
  battlePokemon,
  setBattle,
  battleon,
  run,
  pokemonsCp,
  setPokemons,
  setCp,
  setPkPosition,
  handleMapChange,
  handleClickItem,
  hatchEgg,
}) => {
  const [color, setColor] = useState<{ Background: string; Road?: string }>({
    Background: "",
    Road: "",
  });
  const [imgKey, setImageKey] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const keyword = location.pathname.split(":")[1];
    setImageKey(keyword);
  }, []);

  useEffect(() => {
    const mapKind = location.pathname.split(":")[1];
    setColor(MapColors[mapKind]);
  }, []);
  return (
    <>
      <TestContainer
        imgKey={
          imgKey
            ? `${
                (MapImage[imgKey] as { [index: string]: string })["Background"]
              }`
            : ""
        }
      >
        <MapContainer ref={yard} backColor={color["Background"]}>
          {imgKey &&
            map.map((items) =>
              items.map((item) =>
                item === 1 ? (
                  <TreeWrapper
                    src={`${
                      (MapImage[imgKey] as { [index: string]: string })[
                        `${imgKey + "1"}`
                      ]
                    }`}
                  ></TreeWrapper>
                ) : (MapImage[imgKey] as { [index: string]: string })[
                    `${imgKey + "2"}`
                  ] ? (
                  <RoadWrapper
                    className="road"
                    roadColor={color["Road"]!}
                    src={`${
                      (MapImage[imgKey] as { [index: string]: string })[
                        `${imgKey + "2"}`
                      ]
                    }`}
                  ></RoadWrapper>
                ) : (
                  <RoadWrapper
                    className="road"
                    roadColor={color["Road"]!}
                  ></RoadWrapper>
                )
              )
            )}
          <Trainer
            src={frontMove ? trainer[0] : trainer[1]}
            ref={char}
            position={charPosition}
            windowSize={windowSize}
          ></Trainer>
          {pokemon.map((item, index) =>
            item ? (
              <Pokemon
                className="pokemon"
                random={randomPosition[index]}
                src={`https://projectpokemon.org/images/normal-sprite/${item.name!.toLowerCase()}.gif`}
              />
            ) : (
              ""
            )
          )}
        </MapContainer>
      </TestContainer>
      {battlePokemon.length !== 0 && battleon === 1 ? (
        <Battle
          color={"green"}
          randomPosition={randomPosition}
          setRun={run}
          pokemonsCp={pokemonsCp}
          setBattle={setBattle}
          battleon={battleon}
          battleIndex={battlePokemon}
          pokemons={pokemon}
          setPokemons={setPokemons}
          setCp={setCp}
          setPkPosition={setPkPosition}
        ></Battle>
      ) : (
        ""
      )}
      <Navigation>
        <Link to="/navi">Home</Link>
        <Link to="/game">Map</Link>
        {bag.Incense !== 0 && bag.Incese !== undefined ? (
          <Incense onClick={handleClickItem}>
            <img
              alt="향로"
              src="https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/incense.png"
            />
            {bag.Incense}
          </Incense>
        ) : (
          ""
        )}
      </Navigation>
      <ThreeD onClick={handleMapChange}>3D 입체보기</ThreeD>

      {hatchEgg.length !== 0 ? (
        <EggWrapper>
          {hatchEgg.map((item) => (
            <Egg information={item}></Egg>
          ))}
        </EggWrapper>
      ) : (
        ""
      )}
    </>
  );
};

export default CommonMapPresenter;
