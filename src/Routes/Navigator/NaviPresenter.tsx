import React from "react";
import styled from "styled-components";
import Menu from "../../Components/Menu";
import LongMenu from "../../Components/LongMenu";
import Pokemon from "../../Components/Pokemon";
import { INaviPresenter } from "../../types";

const PokeWrapper = styled.div<{ windowSize: number }>`
  position: absolute;
  top: 0;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: ${(props) => (props.windowSize > 810 ? "70px" : "0px")};
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  overflow: auto;
`;

const NaviPresenter: React.FC<INaviPresenter> = ({ pokemons, windowSize }) => {
  return (
    <>
      {windowSize > 810 ? <LongMenu></LongMenu> : <Menu></Menu>}
      <PokeWrapper windowSize={windowSize}>
        {pokemons.map((item) => (
          <Pokemon key={item.id} pokemon={item} />
        ))}
      </PokeWrapper>
    </>
  );
};
export default NaviPresenter;
