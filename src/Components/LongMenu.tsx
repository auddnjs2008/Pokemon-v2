import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { ILongMenu } from "../types";

const Container = styled.div`
  position: fixed;
  background-color: white;
  z-index: 2;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  box-shadow: 0px 5px 5px rgba(20, 20, 20, 0.1);
`;

const MLink = styled(Link)<{ isColor: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 10px;
  font-size: 20px;
  background-color: ${(props) => (props.isColor ? "#f0932b" : "white")};
  img {
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }
`;

const LongMenu: React.FC<ILongMenu> = (props) => {
  return (
    <Container>
      <MLink
        to="/navi"
        isColor={props.location.pathname.includes("/navi") ? true : false}
      >
        Encyclopedia
        <img
          alt="menu"
          src="https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/camera.png"
        ></img>
      </MLink>
      <MLink
        to="/store"
        isColor={props.location.pathname === "/store" ? true : false}
      >
        Store{" "}
        <img
          alt="menu"
          src="https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/pokebag.png"
        />
      </MLink>
      <MLink
        to="/mine"
        isColor={props.location.pathname === "/mine" ? true : false}
      >
        My Pokemons
        <img
          alt="menu"
          src="https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/pikachu-2.png"
        ></img>
      </MLink>
      <MLink
        to="/bag"
        isColor={props.location.pathname === "/bag" ? true : false}
      >
        My Bag
        <img
          alt="menu"
          src="https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/backpack.png"
        />
      </MLink>
      <MLink
        to="/game"
        isColor={props.location.pathname.includes("/game") ? true : false}
      >
        Game{" "}
        <img
          alt="menu"
          src="https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/fist.png"
        />
      </MLink>
      <MLink
        to="/doc"
        isColor={props.location.pathname.includes("/doc") ? true : false}
      >
        Docs{" "}
        <img
          alt="menu"
          src="https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/smartphone.png"
        />
      </MLink>
    </Container>
  );
};

export default withRouter(LongMenu);
