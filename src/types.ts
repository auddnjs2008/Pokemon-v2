import React from "react";

export interface IHomePresenter {
  pokemon: IPokemon[] | null;
  setPokemon: React.Dispatch<IPokemon[]>;
  colorArray: number[];
  setColor: React.Dispatch<React.SetStateAction<number[]>>;
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

export interface INaviPresenter {
  pokemons: IPokemon[];
  windowSize: number;
}

export interface IGetPokemon {
  setPokemon: React.Dispatch<IPokemon[]>;
}

export interface IPokemon {
  candy: string;
  candy_count?: number;
  color?: number;
  commonBackUrl?: string;
  commonUrl?: string;
  cp?: number;
  egg: string;
  health?: number;
  height: string;
  id: number;
  img: string;
  multipliers: number | number[] | null;
  myId?: number;
  name: string;
  prev_evolution?: { num: string; name: string }[];
  next_evolution?: { num: string; name: string }[];
  num: string;
  shinyBackUrl?: string;
  shinyUrl?: string;
  type: string[];
  weakness?: string[];
  weight: string;
}
