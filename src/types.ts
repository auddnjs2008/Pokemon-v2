import React from "react";
import { Route, RouteProps } from "react-router";

export interface IHomePresenter {
  pokemon: IPokemon[] | null;
  setPokemon: React.Dispatch<IPokemon[]>;
  colorArray: number[];
  setColor: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface IDetailPresenter {
  pokemon: IPokemon;
  commonLength: number;
  windowSize: number;
}

export interface IStorePresenter {
  windowSize: number;
  handleItemClick: (
    name: string,
    info: string,
    img: string,
    money: number
  ) => void;
  handleClose: () => void;
  handleBuyBtn: () => void;
  name: string;
  info: string;
  img: string;
  money: number;
  scroll: number;
  myMoney: number;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface IMyPokePresenter {
  windowSize: number;
  pokemons: IPokemon[];
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handlePokemonClick: (e: any) => void;
  battlePokemons: IPokemon[];
  changeBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  changePossible: number;
  clearBtnClick: () => void;
  sendBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => 0 | undefined;
}

export interface IBagPresenter {
  evolveUrl: string[];
  evolveWindow: React.RefObject<HTMLDivElement>;
  showWindow: React.RefObject<HTMLDivElement>;
  eggWindow: React.RefObject<HTMLDivElement>;
  scroll: number;
  windowSize: number;
  bag: any;
  egg: Egg[];
  showPokemon: IPokemon[] | Egg[] | any[];
  handleUseClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSelectPokemon: (e: React.MouseEvent<HTMLLIElement>) => void;
  handleSelectEgg: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export interface IGameHomePresenter {
  windowSize: number;
}

export interface INaviPresenter {
  pokemons: IPokemon[];
  windowSize: number;
}

export interface IGetPokemon {
  setPokemon: React.Dispatch<IPokemon[]>;
}

export interface IAttackEffect {
  type: string[][];
}

export interface IBattle {
  color: string;
  battleIndex: number[];
  pokemons: IPokemon[];
  setBattle: React.Dispatch<React.SetStateAction<number>>;
  battleon: number;
  setRun: React.Dispatch<React.SetStateAction<number>>;
  pokemonsCp: number[];
  setPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>;
  setCp: React.Dispatch<React.SetStateAction<number[]>>;
  setPkPosition: React.Dispatch<React.SetStateAction<number[][]>>;
  randomPosition: number[][];
}

export interface IBattleMessage {
  attack: number[];
}

export interface IEggContainer {
  information: Egg;
}

export interface ILongMenu {
  location: RouteProps["location"];
}

export interface IPokemon {
  candy?: string;
  candy_count?: number;
  color?: number;
  commonBackUrl?: string;
  commonUrl?: string;
  cp?: number;
  egg?: string;
  health?: number;
  height?: string;
  id?: number;
  img?: string;
  multipliers?: number | number[] | null;
  myId?: number;
  name?: string;
  prev_evolution?: { num: string; name: string }[];
  next_evolution?: { num: string; name: string }[];
  num?: string;
  shinyBackUrl?: string;
  shinyUrl?: string;
  type?: string[];
  weakness?: string[];
  weight?: string;
  specialUrl?: string;
  specialBackUrl?: string;
  specialShinyUrl?: string;
  specialShinyBackUrl?: string;
  pokeGif?: string;
}

export interface Egg {
  evolvingWalk: number;
  img: string;
  name: string;
  walk: number;
}

export interface IAttackColor {
  [index: string]: string;
  Normal: string;
  Fire: string;
  Water: string;
  Electric: string;
  Grass: string;
  Ice: string;
  Fighting: string;
  Poison: string;
  Ground: string;
  Flying: string;
  Psychic: string;
  Bug: string;
  Rock: string;
  Ghost: string;
  Dragon: string;
}

///////////// --

export interface IUrlSearch {
  [index: string]: (smallName: string) => any;
  commonUrl: (smallName: string) => string;
  commonBackUrl: (smallName: string) => string;
  shinyUrl: (smallName: string) => string;
  shinyBackUrl: (smallName: string) => string;
  megaUrl: (smallName: string) => {
    megaCommonUrl: string;
    megaShinyUrl: string;
  } | null;

  alolalUrl: (smallName: string) => {
    alolaCommonUrl: string;
    alolaShinyUrl: string;
  } | null;
  megaXUrl: (smallName: string) => {
    megaXCommonUrl: string;
    megaXShinyUrl: string;
  } | null;
  megaYUrl: (smallName: string) => {
    megaYCommonUrl: string;
    megaYShinyUrl: string;
  } | null;
  megaBackUrl: (smallName: string) => {
    megaBackCommonUrl: string;
    megaBackShinyUrl: string;
  } | null;
  alolaBackUrl: (smallName: string) => {
    alolaBackCommonUrl: string;
    alolaBackShinyUrl: string;
  } | null;
  megaXBackUrl: (smallName: string) => {
    megaXBackCommonUrl: string;
    megaXBackShinyUrl: string;
  } | null;
  megaYBackUrl: (smallName: string) => {
    megaYBackCommonUrl: string;
    megaYBackShinyUrl: string;
  } | null;
}
