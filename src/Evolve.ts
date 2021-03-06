import pokemon from "pokesprite-images/data/pokemon.json";
import usePokemon from "pokemon-go-pokedex";
import { IAttackColor, IUrlSearch } from "./types";

const realPokemon = usePokemon.pokemon;

let megaPokemon: any = Object.values(pokemon).filter(
  (item) =>
    (item["gen-8"].forms as any).mega &&
    (item["gen-8"].forms as any).mega.is_prev_gen_icon === true
);

let alolaPokemon: any = Object.values(pokemon).filter(
  (item) =>
    (item["gen-8"].forms as any).alola &&
    (item["gen-8"].forms as any).alola.is_prev_gen_icon === true
);

let megaXYPokemon: any = Object.values(pokemon).filter(
  (item) =>
    (item["gen-8"] as any).forms["mega-x"] &&
    (item["gen-8"] as any).forms["mega-x"].is_prev_gen_icon === true
);

let commonUrl = "https://projectpokemon.org/images/normal-sprite/";
let shinyUrl = "https://projectpokemon.org/images/shiny-sprite/";

let commonBackUrl =
  "https://projectpokemon.org/images/sprites-models/normal-back/";
let shinyBackUrl =
  "https://projectpokemon.org/images/sprites-models/shiny-back/";
let googleProxyURL =
  "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

megaPokemon = megaPokemon
  .filter((item: any) => {
    let result = false;
    for (let i = 0; i < realPokemon.length; i++) {
      if (item.name.eng === realPokemon[i].name) {
        result = true;
      }
    }
    return result;
  })
  .map((item: any) => item.name.eng.toLowerCase());

alolaPokemon = alolaPokemon
  .filter((item: any) => {
    let result = false;
    for (let i = 0; i < realPokemon.length; i++) {
      if (item.name.eng === realPokemon[i].name) {
        result = true;
      }
    }
    return result;
  })
  .map((item: any) => item.name.eng.toLowerCase());

alolaPokemon.push("marowak", "golem");

megaXYPokemon = megaXYPokemon
  .filter((item: any) => {
    let result = false;
    for (let i = 0; i < realPokemon.length; i++) {
      if (item.name.eng === realPokemon[i].name) {
        result = true;
      }
    }
    return result;
  })
  .map((item: any) => item.name.eng.toLowerCase());

const attackColor: IAttackColor = {
  Normal: "#A8A878",
  Fire: "#F08030",
  Water: "#6890F0",
  Electric: "#F8D030",
  Grass: "#78C850",
  Ice: "#98D8D8",
  Fighting: "#C03028",
  Poison: "#A040A0",
  Ground: "#E0C068",
  Flying: "#A890F0",
  Psychic: "#F85888",
  Bug: "#A8B820",
  Rock: "#B8A038",
  Ghost: "#705898",
  Dragon: "#7038F8",
};

const Damege: any = {
  // ???: ???????????? ???  value ???????????? ??????
  Normal: { Rock: 0.5, Ghost: 0 },
  Fire: { Fire: 0.5, Wahter: 0.5, Grass: 2, Ice: 2, Bug: 2, Dragon: 0.5 },
  Water: { Fire: 2, Water: 2, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5 },
  Electric: {
    Water: 2,
    Electric: 0.5,
    Grass: 0.5,
    Ground: 0,
    Flying: 2,
    Dragon: 0.5,
  },
  Grass: {
    Fire: 0.5,
    Water: 2,
    Grass: 0.5,
    Poison: 0.5,
    Ground: 2,
    Flying: 0.5,
    Bug: 0.5,
    Rock: 2,
    Dragon: 0.5,
  },
  Ice: {
    Fire: 0.5,
    Water: 0.5,
    Grass: 2,
    Ice: 0.5,
    Ground: 2,
    Flying: 2,
    Dragon: 2,
  },
  Fighting: {
    Normal: 2,
    Ice: 2,
    Poison: 0.5,
    Flying: 0.5,
    Psychic: 0.5,
    Bug: 0.5,
    Rock: 2,
    Ghost: 0,
  }, //?????????  ??????????????? ???
  Poison: { Grass: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5 },
  Ground: {
    Fire: 2,
    Electric: 2,
    Grass: 0.5,
    Poison: 2,
    Flying: 0,
    Bug: 0.5,
    Rock: 2,
  },
  Flying: { Electric: 0.5, Grass: 2, Fighting: 2, Bug: 2, Rock: 0.5 },
  Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5 }, // ??????
  Bug: {
    Fire: 0.5,
    Grass: 2,
    Fighting: 0.5,
    Poison: 0.5,
    Flying: 0.5,
    Psychic: 2,
    Ghost: 0.5,
  }, // ??????
  Rock: { Fire: 2, Ice: 2, Fighting: 0.5, Ground: 0.5, Flying: 2, Bug: 2 },
  Ghost: { Normal: 0, Psychic: 2, Ghost: 2 }, //??????
  Dragon: { Dragon: 2 },
}; // ??? ?????????

const DamegeCalc = (
  attackType: string | any[],
  defenseType: string | any[]
) => {
  // ?????????????????? ??????????????? ????????? ??? ??????.
  let attackDamege = 1;
  if (attackType.length !== 0 && defenseType.length !== 0) {
    (attackType as any[]).forEach((item: any) => {
      const KeyArray = Object.keys(Damege[item]);

      (defenseType as any[]).forEach((value) => {
        // ???????????? ????????? ????????? ????????? ?????????.
        if (KeyArray.includes(value)) {
          // ????????????  ??? ????????? ????????????.
          attackDamege = attackDamege * Damege[item][value];
        }
      });
    });
  }
  return attackDamege;
};

const urlSearch: IUrlSearch = {
  commonUrl: (smallName: string) => commonUrl + smallName + ".gif",
  commonBackUrl: (smallName: string) => commonBackUrl + smallName + ".gif",
  shinyUrl: (smallName: string) => shinyUrl + smallName + ".gif",
  shinyBackUrl: (smallName: string) => shinyBackUrl + smallName + ".gif",
  megaUrl: (smallName: string) =>
    megaPokemon.includes(smallName)
      ? {
          megaCommonUrl: commonUrl + smallName + "-mega.gif",
          megaShinyUrl: shinyUrl + smallName + "-mega.gif",
        }
      : null,
  alolalUrl: (smallName: string) =>
    alolaPokemon.includes(smallName)
      ? {
          alolaCommonUrl: commonUrl + smallName + "-alola.gif",
          alolaShinyUrl: shinyUrl + smallName + "-alola.gif",
        }
      : null,
  megaXUrl: (smallName: string) =>
    megaXYPokemon.includes(smallName)
      ? {
          megaXCommonUrl: commonUrl + smallName + "-megax.gif",
          megaXShinyUrl: shinyUrl + smallName + "-megax.gif",
        }
      : null,
  megaYUrl: (smallName: string) =>
    megaXYPokemon.includes(smallName)
      ? {
          megaYCommonUrl: commonUrl + smallName + "-megay.gif",
          megaYShinyUrl: shinyUrl + smallName + "-megay.gif",
        }
      : null,
  megaBackUrl: (smallName: string) =>
    megaPokemon.includes(smallName)
      ? {
          megaBackCommonUrl: commonBackUrl + smallName + "-mega.gif",
          megaBackShinyUrl: shinyBackUrl + smallName + "-mega.gif",
        }
      : null,
  alolaBackUrl: (smallName: string) =>
    alolaPokemon.includes(smallName)
      ? {
          alolaBackCommonUrl: commonBackUrl + smallName + "-alola.gif",
          alolaBackShinyUrl: shinyBackUrl + smallName + "-alola.gif",
        }
      : null,
  megaXBackUrl: (smallName: string) =>
    megaXYPokemon.includes(smallName)
      ? {
          megaXBackCommonUrl: commonBackUrl + smallName + "-megax.gif",
          megaXBackShinyUrl: shinyBackUrl + smallName + "-megax.gif",
        }
      : null,
  megaYBackUrl: (smallName: string) =>
    megaXYPokemon.includes(smallName)
      ? {
          megaYBackCommonUrl: commonBackUrl + smallName + "-megay.gif",
          megaYBackShinyUrl: shinyBackUrl + smallName + "-megay.gif",
        }
      : null,
};

const PokemonEvolve = {
  megaPokemon,
  alolaPokemon,
  megaXYPokemon,
  urlSearch,
  googleProxyURL,
  attackColor,
  DamegeCalc,
};

export default PokemonEvolve;
