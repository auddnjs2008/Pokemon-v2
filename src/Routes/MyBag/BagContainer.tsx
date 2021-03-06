import React, { useEffect, useRef, useState } from "react";
import BagPresenter from "./BagPresenter";
import PokeDex from "pokemon-go-pokedex";
import Evolve from "../../Evolve";
import imageUrls from "../../lib/imagesUrl";
import { IPokemon } from "../../types";

const BagContainer = () => {
  const [windowSize, setWindow] = useState(window.innerWidth);
  const [bag, setBag] = useState(JSON.parse(localStorage.getItem("myBag")!));
  const [showPokemon, setShowPokemon] = useState<IPokemon[]>([]);
  const [scroll, setScroll] = useState(window.scrollY);
  const [local, setLocal] = useState(
    JSON.parse(localStorage.getItem("myPoketmon")!)
  );
  const [egg, setEgg] = useState(
    localStorage.getItem("myEggs")
      ? JSON.parse(localStorage.getItem("myEggs")!)
      : null
  );
  const [item, setItem] = useState<string>("");
  const [evolveUrl, setEvolve] = useState<string[]>([]);
  const showWindow = useRef<HTMLDivElement>(null);
  const eggWindow = useRef<HTMLDivElement>(null);
  const evolveWindow = useRef<HTMLDivElement>(null);

  const { megaPokemon, alolaPokemon, megaXYPokemon, urlSearch } = Evolve;

  let commonUrl = "https://projectpokemon.org/images/normal-sprite/";
  let shinyUrl = "https://projectpokemon.org/images/shiny-sprite/";
  let commonBackUrl =
    "https://projectpokemon.org/images/sprites-models/normal-back/";
  let shinyBackUrl =
    "https://projectpokemon.org/images/sprites-models/shiny-back/";

  useEffect(() => {
    window.addEventListener("resize", () => setWindow(window.innerWidth));
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return () => {
      window.removeEventListener("resize", () => setWindow(window.innerWidth));
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("myPoketmon", JSON.stringify(local));
    setShowPokemon(local.filter((item: IPokemon) => item.health !== 100));
  }, [local]);

  useEffect(() => {
    localStorage.setItem("myBag", JSON.stringify(bag));
  }, [bag]);

  useEffect(() => {
    localStorage.setItem("myEggs", JSON.stringify(egg));
  }, [egg]);

  //?????????  ????????? ??????

  const BattlePokemonSetting = (
    myPokemons: IPokemon[],
    evolvePokmon: IPokemon,
    id: number
  ) => {
    let battlePokemons = JSON.parse(localStorage.getItem("battlePokemons")!);
    battlePokemons = battlePokemons.map((item: IPokemon) => {
      if (item.myId === myPokemons[id - 1].myId) return evolvePokmon;
      else return item;
    });

    localStorage.setItem("battlePokemons", JSON.stringify(battlePokemons));
  };

  const EvolveDisplayNone = () => {
    setTimeout(
      () =>
        evolveWindow.current
          ? (evolveWindow.current.style.display = "none")
          : "",
      8000
    );
    if (showWindow.current) showWindow.current.style.display = "none";
  };

  const handleSelectPokemon = (e: React.MouseEvent<HTMLLIElement>) => {
    const myPokemons: IPokemon[] = JSON.parse(
      localStorage.getItem("myPoketmon")!
    );
    const newBag = JSON.parse(localStorage.getItem("myBag")!);
    const id = Number(e.currentTarget.id);

    if (item === "Potion" && newBag.Potion > 0) {
      myPokemons[id - 1].health! += 20;
      newBag.Potion -= 1;
    } else if (item === "superPotion" && newBag.SuperPotion > 0) {
      myPokemons[id - 1].health! += 40;
      newBag.SuperPotion -= 1;
    } else if (item === "hyperPotion" && newBag.HyperPotion > 0) {
      myPokemons[id - 1].health! += 60;
      newBag.HyperPotion -= 1;
    } else if (item === "candy" && newBag.Candy > 0) {
      /// ????????? ?????????????????? ??????.
      const Beforeevolve = parseInt(myPokemons[id - 1].next_evolution![0].num);
      let evolvePokmon: IPokemon = PokeDex.pokemon[Beforeevolve - 1];
      const name = evolvePokmon.name!.toLowerCase();
      let multipliers: number =
        myPokemons[id - 1].multipliers &&
        typeof myPokemons[id - 1].multipliers === "number"
          ? (myPokemons[id - 1].multipliers as number)
          : (myPokemons[id - 1].multipliers as number[])[
              Math.floor(
                Math.random() *
                  ((myPokemons[id - 1].multipliers as number[]).length - 1)
              )
            ]; //cp ?????????
      let newCp = Math.floor(myPokemons[id - 1].cp! * multipliers);
      //   let battlePokemons = JSON.parse(localStorage.getItem("battlePokemons"));

      evolvePokmon = {
        ...evolvePokmon,
        cp: newCp,
        health: 100,
        myId: myPokemons[id - 1].myId,
        commonUrl: commonUrl + name + ".gif",
        commonBackUrl: commonBackUrl + name + ".gif",
        shinyUrl: shinyUrl + name + ".gif",
        shinyBackUrl: shinyBackUrl + name + ".gif",
        color: myPokemons[id - 1].color,
      };

      if (myPokemons[id - 1].color === 0)
        setEvolve([myPokemons[id - 1].commonUrl!, evolvePokmon.commonUrl!]);
      else if (myPokemons[id - 1].color === 1)
        setEvolve([myPokemons[id - 1].shinyUrl!, evolvePokmon.shinyUrl!]);

      if (evolveWindow.current) evolveWindow.current.style.display = "flex"; // ?????? ????????? ???????????????.
      newBag.Candy -= myPokemons[id - 1].candy_count!; // ??????????????? ?????????.
      //?????? ?????? ????????? ???????????????.
      myPokemons[id - 1] = evolvePokmon;

      // ?????? ?????? ???????????? ????????? ????????? ???????????????.

      BattlePokemonSetting(myPokemons, evolvePokmon, id);

      //?????? ?????????  ????????????.
      EvolveDisplayNone();
    } else if (item === "MegaCandy" && newBag.MegaCandy > 0) {
      //?????? ????????????  ??????xy???????????? ?????? ??????
      const smallName = myPokemons[id - 1].name!.toLowerCase();
      if (megaPokemon.includes(smallName)) {
        const megaUrl = urlSearch.megaUrl(smallName);
        const megaBackUrl = urlSearch.megaBackUrl(smallName);
        myPokemons[id - 1].cp = myPokemons[id - 1].cp! * 2;
        myPokemons[id - 1] = {
          ...myPokemons[id - 1],
          specialUrl: megaUrl!.megaCommonUrl,
          specialBackUrl: megaBackUrl!.megaBackCommonUrl,
          specialShinyUrl: megaUrl!.megaShinyUrl,
          specialShinyBackUrl: megaBackUrl!.megaBackShinyUrl,
        };
      } else {
        // ?????? xy??????  ?????? ????????? ?????????. x ???  y ??????
        const xy = ["X", "Y"];
        const random = xy[Math.floor(Math.random() * 2)];
        const randomUrl = urlSearch["mega" + random + "Url"](smallName);
        const randomBackUrl = urlSearch["mega" + random + "BackUrl"](smallName);
        myPokemons[id - 1].cp = Math.floor(myPokemons[id - 1].cp! * 2.5);
        myPokemons[id - 1] = {
          ...myPokemons[id - 1],
          specialUrl: randomUrl["mega" + random + "CommonUrl"],
          specialBackUrl: randomBackUrl["mega" + random + "BackCommonUrl"],
          specialShinyUrl: randomUrl["mega" + random + "ShinyUrl"],
          specialShinyBackUrl: randomBackUrl["mega" + random + "BackShinyUrl"],
        };
      }

      //?????? ???????????? ????????? ?????????  ????????? ????????? ??????.

      // BattlePokemonSetting(myPokemons, myPokemons[id - 1], id);

      // setEvolve???  ????????? ????????? url ??????
      if (myPokemons[id - 1].color === 0) {
        setEvolve([
          myPokemons[id - 1].commonUrl!,
          myPokemons[id - 1].specialUrl!,
        ]);
      } else {
        setEvolve([
          myPokemons[id - 1].shinyUrl!,
          myPokemons[id - 1].specialShinyUrl!,
        ]);
      }
      if (evolveWindow.current) evolveWindow.current.style.display = "flex"; // ?????? ????????? ???????????????.
      newBag.MegaCandy -= 1; // ??????????????? ?????????.

      //?????? ?????????  ????????????.
      EvolveDisplayNone();
    } else if (item === "AlolaCandy" && newBag.AlolaCandy > 0) {
      const smallName = myPokemons[id - 1].name!.toLowerCase();
      const alolaUrl = urlSearch.alolalUrl(smallName);
      const alolaBackUrl = urlSearch.alolaBackUrl(smallName);
      myPokemons[id - 1].cp = Math.floor(myPokemons[id - 1].cp! * 1.5);
      myPokemons[id - 1] = {
        ...myPokemons[id - 1],
        specialUrl: alolaUrl!.alolaCommonUrl,
        specialBackUrl: alolaBackUrl!.alolaBackCommonUrl,
        specialShinyUrl: alolaUrl!.alolaShinyUrl,
        specialShinyBackUrl: alolaBackUrl!.alolaBackShinyUrl,
      };

      //?????? ???????????? ????????? ?????????  ????????? ????????? ??????.
      // BattlePokemonSetting(myPokemons, myPokemons[id - 1], id);

      // setEvolve???  ????????? ????????? url ??????
      if (myPokemons[id - 1].color === 0) {
        setEvolve([
          myPokemons[id - 1].commonUrl!,
          myPokemons[id - 1].specialUrl!,
        ]);
      } else {
        setEvolve([
          myPokemons[id - 1].shinyUrl!,
          myPokemons[id - 1].specialShinyUrl!,
        ]);
      }

      if (evolveWindow.current) evolveWindow.current.style.display = "flex"; // ?????? ????????? ???????????????.
      newBag.AlolaCandy -= 1; // ??????????????? ?????????.

      //?????? ?????????  ????????????.
      EvolveDisplayNone();
    } else if (item === "ColorChanger" && newBag.ColorChanger > 0) {
      myPokemons[id - 1].color = myPokemons[id - 1].color === 0 ? 1 : 0;
      if (evolveWindow.current) evolveWindow.current.style.display = "flex"; // ?????? ????????? ???????????????.
      newBag.ColorChanger -= 1; // ??????????????? ?????????.

      // setEvolve???  ????????? ????????? url ??????
      if (myPokemons[id - 1].color === 0) {
        myPokemons[id - 1].specialUrl
          ? setEvolve([
              myPokemons[id - 1].specialShinyUrl!,
              myPokemons[id - 1].specialUrl!,
            ])
          : setEvolve([
              myPokemons[id - 1].shinyUrl!,
              myPokemons[id - 1].commonUrl!,
            ]);
      } else {
        myPokemons[id - 1].specialUrl
          ? setEvolve([
              myPokemons[id - 1].specialUrl!,
              myPokemons[id - 1].specialShinyUrl!,
            ])
          : setEvolve([
              myPokemons[id - 1].commonUrl!,
              myPokemons[id - 1].shinyUrl!,
            ]);
      }
      //?????? ???????????? ????????? ?????????  ????????? ????????? ??????.

      // BattlePokemonSetting(myPokemons, myPokemons[id - 1], id);
      EvolveDisplayNone();
    }

    if (myPokemons[id - 1].health! > 100) myPokemons[id - 1].health = 100;

    BattlePokemonSetting(myPokemons, myPokemons[id - 1], id);
    setLocal(myPokemons);
    setBag(newBag);
  };

  const handleUseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const Id = (e.target as HTMLElement).id;
    const myPokemons = localStorage.getItem("myPoketmon")
      ? JSON.parse(localStorage.getItem("myPoketmon")!)
      : null;
    setItem(Id); //?????? ????????? ????????? ??????

    //id??? ???????????? ????????? ??????????????? ????????? ??? ??????????????? ??????.
    if (Id.includes("Potion")) {
      if (showWindow.current) showWindow.current.style.display = "grid";
      setShowPokemon(
        myPokemons.filter((item: IPokemon) => item.health !== 100)
      );
    } else if (Id.includes("candy")) {
      //?????? ?????? ????????? ???
      if (showWindow.current) showWindow.current.style.display = "grid";
      setShowPokemon(
        myPokemons.filter((item: IPokemon) => item.candy_count! <= bag.Candy)
      );
    } else if (Id.includes("Incubator")) {
      // ??????????????? ????????? ???

      if (eggWindow.current) eggWindow.current.style.display = "grid";
      const egg = bag.Egg ? bag.Egg : 0;
      const luckyEgg = bag.LuckyEgg ? bag.LuckyEgg : 0;
      setShowPokemon([egg, luckyEgg]);
    } else if (Id === "MegaCandy") {
      // ?????? ?????????  ???????????? ?????? megax  megay????????? ??????
      if (showWindow.current) showWindow.current.style.display = "grid";
      setShowPokemon(
        myPokemons.filter(
          (item: IPokemon) =>
            item.specialUrl === undefined &&
            (megaPokemon.includes(item.name!.toLowerCase()) ||
              megaXYPokemon.includes(item.name!.toLowerCase()))
        )
      );
    } else if (Id === "AlolaCandy") {
      if (showWindow.current) showWindow.current.style.display = "grid";
      setShowPokemon(
        myPokemons.filter(
          (item: IPokemon) =>
            item.specialUrl === undefined &&
            alolaPokemon.includes(item.name!.toLowerCase())
        )
      );
    } else if (Id === "ColorChanger") {
      if (showWindow.current) showWindow.current.style.display = "grid";
      setShowPokemon(myPokemons);
    }
  };

  // ?????????????????? ????????? ????????? ????????????  ????????? ?????? ??? ???????????????.
  const handleSelectEgg = (e: React.MouseEvent<HTMLLIElement>) => {
    const id = (e.target as HTMLElement).id;
    const newEggs = JSON.parse(localStorage.getItem("myEggs")!);
    let newBag = JSON.parse(localStorage.getItem("myBag")!);
    newBag[item] -= 1;
    if (parseInt(id) === 1) {
      // ?????? ???
      newEggs.push({
        name: "Egg",
        walk: 0,
        evolvingWalk: item === "EggIncubator" ? 1000 : 500,
        img: imageUrls.Egg,
      });
      newBag["Egg"] -= 1;
    } else {
      // ????????? ???
      newEggs.push({
        name: "SpecialEgg",
        evolvingWalk: item === "EggIncubator" ? 1000 : 500,
        walk: 0,
        img: imageUrls.LuckyEgg,
      });
      newBag["LuckyEgg"] -= 1;
    }

    setEgg(newEggs);
    setBag(newBag);
    if (eggWindow.current) eggWindow.current.style.display = "none";
  };

  return (
    <BagPresenter
      evolveUrl={evolveUrl}
      evolveWindow={evolveWindow}
      showWindow={showWindow}
      eggWindow={eggWindow}
      scroll={scroll}
      windowSize={windowSize}
      bag={bag}
      egg={egg}
      showPokemon={showPokemon}
      handleUseClick={handleUseClick}
      handleSelectPokemon={handleSelectPokemon}
      handleSelectEgg={handleSelectEgg}
    ></BagPresenter>
  );
};

export default BagContainer;
