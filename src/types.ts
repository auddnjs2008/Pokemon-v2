import React from "react";
import { RouteComponentProps } from "react-router";

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
  infoBox: React.RefObject<HTMLDivElement>;
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

export interface ICommonMapPresenter {
  map: number[][];
  trainer: string[];
  bag: any;
  char: React.RefObject<HTMLImageElement>;
  yard: React.RefObject<HTMLDivElement>;
  charPosition: number[];
  windowSize: number[];
  frontMove: number;
  pokemon: IPokemon[];
  randomPosition: number[][];
  battlePokemon: number[];
  setBattle: React.Dispatch<React.SetStateAction<number>>;
  battleon: number;
  run: React.Dispatch<React.SetStateAction<number>>;
  pokemonsCp: number[];
  setPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>;
  setCp: React.Dispatch<React.SetStateAction<number[]>>;
  setPkPosition: React.Dispatch<React.SetStateAction<number[][]>>;
  handleMapChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickItem: (e: React.MouseEvent<HTMLDivElement>) => void;
  hatchEgg: Egg[];
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

export interface IMessage {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface IMyPokemon {
  sendBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id: number;
  border: boolean;
  changePossible: number;
  item: IPokemon;
  handlePokemonClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
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

export interface ILongMenu extends RouteComponentProps {
  // location: RouteProps["location"];
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

export interface IMapImages {
  [index: string]: string | { [index: string]: string };
  Pillar: string;
  Roof: string;
  Navigation: string;
  Trainer: string;
  TrainerBack: string;
  YardMap: {
    Background: string;
    YardMap1: string;
  };
  WaterMap: {
    Background: string;
    WaterMap1: string;
    WaterMap2: string;
    Ship: string;
  };
  SkyMap: {
    Background: string;
    SkyMap1: string;
    SkyMap2: string;
  };
  RockMap: {
    Background: string;
    RockMap1: string;
    RockMap2: string;
  };
  ForestMap: {
    Background: string;
    ForestMap1: string;
  };
  IceMap: {
    Background: string;
    IceMap1: string;
  };
  FireMap: {
    Background: string;
    FireMap1: string;
  };
  ElectricMap: {
    Background: string;
    ElectricMap1: string;
  };
  BossMap: {
    Background: string;
    BossMap1: string;
  };
}

interface CommonMap {
  [key: string]: string;
  Background: string;
  Road: string;
}

interface BossMap {
  [key: string]: string;
  Background: string;
}

export interface IMapColors {
  [key: string]: CommonMap | BossMap;
  YardMap: {
    Background: string;
    Road: string;
  };
  WaterMap: {
    Background: string;
    Road: string;
  };
  SkyMap: {
    Background: string;
    Road: string;
  };
  RockMap: {
    Background: string;
    Road: string;
  };
  ForestMap: {
    Background: string;
    Road: string;
  };
  IceMap: {
    Background: string;
  };
  FireMap: {
    Background: string;
  };
  ElectricMap: {
    Background: string;
  };
  BossMap: {
    Background: string;
  };
}

export interface IMonsterType {
  [key: string]: string[];
  YardMap: string[];
  WaterMap: string[];
  RockMap: string[];
  SkyMap: string[];
  ForestMap: string[];
  FireMap: string[];
  IceMap: string[];
  ElectricMap: string[];
  BossMap: string[];
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
