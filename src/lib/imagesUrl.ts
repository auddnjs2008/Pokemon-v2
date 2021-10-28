import { IMapImages } from "../types";

const imageUrls = {
  pokeball:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/pokeball.png",
  superball:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/superball.png",
  ultraball:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/ultra-ball.png",
  pokeballs:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/pokeballs.png",
  Incense:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/incense.png",
  Incenses:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/incenses.png",
  razzberry:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/razz-berry.png",
  Potion:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/potion.png",
  SuperPotion:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/super-potion.png",
  HyperPotion:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/hyper-potion.png",
  Egg: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/egg.png",
  LuckyEgg:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/lucky-egg.png",
  EggIncubator:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/egg-incubator.png",
  SuperEggIncubator:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/egg-incubator-1.png",
  Candy:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/candy.png",
  PickacuBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/pikachu-2.png",
  CharmanderBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/charmander.png",
  SquirtleBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/squirtle.png",
  BullbasaurBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/bullbasaur.png",
  PsyduxBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/psyduck.png",
  MeowthBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/meowth.png",
  EeveeBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/eevee.png",
  JigglypuffBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/jigglypuff.png",
  SnorlaxBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/snorlax.png",
  BellsproutBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/bellsprout.png",
  ZubatBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/zubat.png",
  RattataBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/rattata.png",
  PidgeyBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/pidgey.png",
  CaterpieBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/caterpie.png",
  MankeyBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/mankey.png",
  VenonatBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/venonat.png",
  AbraBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/abra.png",
  WeedleBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/weedle.png",
  MewBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/mew.png",
  DratiniBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/dratini.png",
  InstinctBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/instinct.png",
  MysticBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/mystic.png",
  ValorBadge:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/valor.png",
  Money:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/pokecoin.png",
  Trainer:
    "https://projectpokemon.org/images/normal-sprite/pikachu-hoenncap.gif",
  TrainerBack:
    "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-hoenncap.gif",
  Tree: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%82%98%EB%AC%B4.png",
  Water:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%AC%BC.png",
  Wave: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%ED%8C%8C%EB%8F%84.png",
  Ship: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B0%B0.png",
};

export const MapImage: IMapImages = {
  Pillar:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EA%B8%B0%EB%91%A5.png",
  Roof: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EC%95%84%EC%B9%98.png",
  Navigation:
    "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokemonicon/188915-pokemon-go/png/compass.png",
  Trainer:
    "https://projectpokemon.org/images/normal-sprite/pikachu-hoenncap.gif",
  TrainerBack:
    "https://projectpokemon.org/images/sprites-models/normal-back/pikachu-hoenncap.gif",
  YardMap: {
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%93%A4%ED%8C%90%EB%B0%B0%EA%B2%BD.jpg",
    Tree: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%82%98%EB%AC%B4.png",
  },
  WaterMap: {
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B0%94%EB%8B%A4%EB%8F%84%EC%8B%9C.jpg",
    Water:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%AC%BC.png",
    Wave: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%ED%8C%8C%EB%8F%84.png",
    Ship: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B0%B0.png",
  },
  SkyMap: {
    Cloud1:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EA%B5%AC%EB%A6%84.png",
    Cloud2:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EA%B5%AC%EB%A6%843.png",
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%ED%95%98%EB%8A%98%EB%B0%B0%EA%B2%BD.jpg",
  },
  RockMap: {
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%8F%99%EA%B5%B4%EB%B0%B0%EA%B2%BD.jpg",
    Rock1:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B0%94%EC%9C%84.png",
    Rock2:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B0%94%EC%9C%84%EA%B8%B8.png",
  },
  ForestMap: {
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/Forest.jpg",
    Tree1:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%82%98%EB%AC%B4.png",
  },
  IceMap: {
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B6%81%EA%B7%B9%EB%B0%B0%EA%B2%BD.jpg",
    Ice1: "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B9%99%ED%95%98.png",
  },
  FireMap: {
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EC%82%B0%EB%B6%88%EB%B0%B0%EA%B2%BD.jpg",
    Fire1:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%A0%88%EB%93%9C%EB%B6%88%EA%BD%83.png",
  },
  ElectricMap: {
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EC%A0%84%EA%B8%B0%EB%B0%B0%EA%B2%BD.jpg",
    Electric1:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B2%88%EA%B0%9C.png",
  },
  BossMap: {
    Background:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EC%82%AC%EC%9B%90%EB%B0%B0%EA%B2%BD.jpg",
    Black1:
      "https://usecloud.s3-ap-northeast-1.amazonaws.com/pokmonImages/%EB%B3%B4%EB%9D%BC%EB%B6%88%EA%BD%83.png",
  },
};

export default imageUrls;
