import { IMonsterType } from "../types";

const monsterTypes: IMonsterType = {
  YardMap: ["Grass"],
  WaterMap: ["Water"],
  RockMap: ["Rock"],
  SkyMap: ["Flying"],
  ForestMap: ["Poison", "Normal", "Bug", "Grass"],
  FireMap: ["Fire"],
  IceMap: ["Water", "Ice"],
  ElectricMap: ["Electric"],
  BossMap: ["Dragon", "Psychic"],
};

export default monsterTypes;
