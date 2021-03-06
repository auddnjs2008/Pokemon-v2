import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import CommonMapPresenter from "./CommonMapPresenter";
import Pokemon from "pokemon-go-pokedex";
import { Egg, IPokemon } from "../../../types";
import { MapImage } from "../../../lib/imagesUrl";
import monsterTypes from "../../../lib/MonsterType";
import { RouteComponentProps } from "react-router";

interface ICommonMapContainer {
  history: RouteComponentProps;
}

const CommonMapContainer: FC<ICommonMapContainer> = ({ history }) => {
  const newMap = [
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  ];
  const [map, setMap] = useState(newMap);
  const [charPosition, setPosition] = useState<number[]>([]); //트레이너 포지션
  const [windowSize, setWindow] = useState<number[]>([]);
  const [frontMove, setMove] = useState(1); // 위로가는 키를 눌렀을때 1 아래로가는 키를 눌렀을때1 (캐릭터 모습 변경)
  const [battleon, setBattle] = useState(0); // battle 상태 표시 0 이면 배틀이 아니고 1이면 배틀 상태이다.
  const [run, setRun] = useState(0); // 도망가고 나오면 1로 상태를 만든다.
  // 랜덤 포켓몬은  3단계 최종진화 포켓몬은 나오지 못하게 한다.
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [wildPokemon, setwildPokemon] = useState<IPokemon[]>([]); // 야생포켓몬들 저장 (랜덤으로 나오는 포켓몬들)
  //랜덤 포켓몬의 좌표들
  const [pokePosition, setPkPosition] = useState<number[][]>([]);
  //트레이너 반경에 포착된 포켓몬    //
  const [battlePokemon, setBattlePoke] = useState<number[]>([]);
  // 랜덤 포켓몬들 cp
  const [pokemonsCp, setCp] = useState<number[]>([]);

  const [bag, setBag] = useState(JSON.parse(localStorage.getItem("myBag")!));

  // 걸음수
  const [walk, setWalk] = useState(0);
  //부화될 알 배열 (여러개 일 수 있다.)
  const [hatchEgg, setHatchEgg] = useState<Egg[]>([]);

  //포켓몬들 요소를 얻기위해 생성
  const centerArray: number[][] = [];
  const pokemonScale = document.querySelectorAll(".pokemon");
  pokemonScale.forEach((item) =>
    centerArray.push([
      item.getBoundingClientRect().width / 2,
      item.getBoundingClientRect().height / 2,
    ])
  );

  const char = useRef<HTMLImageElement>(null);
  const yard = useRef<HTMLDivElement>(null);
  const trainerImg = [MapImage.Trainer, MapImage.TrainerBack];

  // 랜덤 함수를 만든다. (좌표랜덤, 포켓몬 배열중  랜덤으로 나오게 하는 함수)
  const getRandom = (num: number, start: number) => {
    return Math.floor(Math.random() * (num - start)) + start; // 1부터 num까지 랜덤으로 배출
  };

  // 부모요소의 시작점을 기준으로 한 상대좌표 구하기

  const getAbsoluteTop = (element: HTMLElement) => {
    return window.pageYOffset + element.getBoundingClientRect().top;
  };
  const getAbsoluteLeft = (element: HTMLElement) => {
    return window.pageXOffset + element.getBoundingClientRect().left;
  };

  let nowPosition = charPosition;

  const handleKeyPress = useCallback(
    (e) => {
      //useCallback은 함수를 재사용하는 것이다.
      // ArrowUp ArrowDown //ArrowRight ArrowLeft // 60px씩 이동

      //도망치고 나서 움직일때 다시  도망모드를 초기화 시킨다.
      if (run) setRun(0);
      e.preventDefault();
      const initialArray: number[] = [
        Math.floor(
          getAbsoluteLeft(char.current!) - getAbsoluteLeft(yard.current!)
        ),
        Math.floor(
          getAbsoluteTop(char.current!) - getAbsoluteTop(yard.current!)
        ),
      ];
      // 경계선 세우기
      if (e.key === "ArrowUp" && battleon === 0) {
        nowPosition.length === 0
          ? setPosition([initialArray[0], initialArray[1] - 60])
          : nowPosition[1] - 60 <= 0
          ? setPosition([nowPosition[0], nowPosition[1]])
          : setPosition([nowPosition[0], nowPosition[1] - 60]);
        setMove(0);
        setWalk((x) => x + 1);
      } else if (e.key === "ArrowDown" && battleon === 0) {
        nowPosition.length === 0
          ? setPosition([initialArray[0], initialArray[1] + 60])
          : nowPosition[1] + 60 >= windowSize[1]
          ? setPosition([nowPosition[0], nowPosition[1]])
          : setPosition([nowPosition[0], nowPosition[1] + 60]);
        setMove(1);
        setWalk((x) => x + 1);
      } else if (e.key === "ArrowRight" && battleon === 0) {
        nowPosition.length === 0
          ? setPosition([initialArray[0] + 60, initialArray[1]])
          : nowPosition[0] + 60 >= windowSize[0] - 50
          ? setPosition([nowPosition[0], nowPosition[1]])
          : setPosition([nowPosition[0] + 60, nowPosition[1]]);
        setWalk((x) => x + 1);
      } else if (e.key === "ArrowLeft" && battleon === 0) {
        nowPosition.length === 0
          ? setPosition([initialArray[0] - 60, initialArray[1]])
          : nowPosition[0] - 60 <= 0
          ? setPosition([nowPosition[0], nowPosition[1]])
          : setPosition([nowPosition[0] - 60, nowPosition[1]]);
        setWalk((x) => x + 1);
      }
    },
    [charPosition]
  );

  const handleKeyUp = useCallback(
    (e) => {
      // 랜덤포켓몬  주위  반경 에 접촉할경우 메세지 발생
      // 좌표 사이의 거리가 반지름 거리보다 크면 인지 못한다.   // 꼭 한명만 배열에 들어가는 건 아니다.
      //포켓몬 중심좌표
      let charCenter = [
        char.current!.getBoundingClientRect().width / 2,
        char.current!.getBoundingClientRect().height / 2,
      ];

      let rader = pokePosition
        .map((item, index) =>
          Math.sqrt(
            Math.pow(
              item[0] +
                centerArray[index][0] -
                (nowPosition[0] + charCenter[0]),
              2
            ) +
              Math.pow(
                item[1] +
                  centerArray[index][1] -
                  (nowPosition[1] + charCenter[1]),
                2
              )
          ) <= 80
            ? index
            : ""
        )
        .filter((item) => item !== "");

      if (
        rader.length !== 0 &&
        !run &&
        JSON.parse(localStorage.getItem("battlePokemons")!).length
      ) {
        window.removeEventListener("keydown", handleKeyPress);
        setBattlePoke(rader as number[]);
        setBattle(1);
      }
      //걸을때마다  걸음 수를 계산하고  그걸  보관하는 인큐베이터 기록에 대입시켜 줘야 한다.
    },
    [charPosition, run]
  );

  const handleMapChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    // yard.current.classList.toggle("perspective");
    e.preventDefault();
    if ((e.target as HTMLElement).innerText === "3D 입체보기") {
      (e.target as HTMLElement).innerText = "평면보기";
      if (yard.current) yard.current.classList.add("perspective");
    } else {
      (e.target as HTMLElement).innerText = "3D 입체보기";
      if (yard.current) yard.current.classList.remove("perspective");
    }
  };

  const randomPokemonSetting = (
    randomPokemon: IPokemon[],
    randomPosition: number[][],
    randomCp: number[]
  ) => {
    if (!pokemon.length) return;
    for (let i = 0; i < 6; i++) {
      let who = pokemon[getRandom(pokemon.length + 1, 1) - 1];
      if (who.name === "Farfetch'd") who["name"] = "farfetchd";
      else if (who.name!.includes("Mr.")) who["name"] = "mr.mime";
      else if (who.name!.includes("Female")) who["name"] = "nidoran_f";
      else if (who.name!.includes("Male")) who["name"] = "nidoran_m";

      randomPokemon.push(who);
      if (yard.current)
        randomPosition.push([
          getRandom(yard.current.clientWidth - 100, 1),
          getRandom(yard.current.clientHeight - 100, 1),
        ]);
      randomCp.push(getRandom(900, 100));
    }
  };

  const isBossMap = (
    mapKey: string,
    randomPokemon: IPokemon[],
    randomPosition: number[][],
    randomCp: number[]
  ) => {
    switch (mapKey) {
      case "FireMap":
        if (randomPokemon.includes(Pokemon.pokemon[145])) return;
        randomPokemon.push(Pokemon.pokemon[145]);
        randomPosition.push([169, 15]);
        randomCp.push(10000);
        break;
      case "IceMap":
        if (randomPokemon.includes(Pokemon.pokemon[143])) return;
        randomPokemon.push(Pokemon.pokemon[143]);
        randomPosition.push([630, 15]);
        randomCp.push(10000);
        break;
      case "ElectricMap":
        if (randomPokemon.includes(Pokemon.pokemon[144])) return;
        randomPokemon.push(Pokemon.pokemon[144]);
        randomPosition.push([169, 15]);
        randomCp.push(10000);
        break;
      case "BossMap":
        if (randomPokemon.includes(Pokemon.pokemon[149])) return;
        randomPokemon.push(Pokemon.pokemon[149]);
        randomPosition.push([169, 15]);
        randomCp.push(10000);
        break;
      default:
        return;
    }
  };

  const handleClickItem = (e: React.MouseEvent<HTMLDivElement>) => {
    let newbag = bag;
    newbag.Incense -= 1;
    setBag(newbag);
    localStorage.setItem("myBag", JSON.stringify(newbag));
    //포켓몬을 더 불러온다.
    let randomPokemon: IPokemon[] = [];
    let randomPosition: number[][] = [];
    let randomCp: number[] = [];
    randomPokemonSetting(randomPokemon, randomPosition, randomCp);
    setwildPokemon([...wildPokemon, ...randomPokemon]);
    setPkPosition([...pokePosition, ...randomPosition]);
    setCp([...pokemonsCp, ...randomCp]);
  };

  useEffect(() => {
    if (char.current && yard.current) {
      setWindow([yard.current.offsetWidth, yard.current.offsetHeight]);
      //setPower(1);
      window.addEventListener("keydown", handleKeyPress);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, [handleKeyPress, run]);

  useEffect(() => {
    if (char.current && yard.current) {
      let randomPokemon: IPokemon[] = [];
      let randomPosition: number[][] = [];
      let randomCp: number[] = [];
      randomPokemonSetting(randomPokemon, randomPosition, randomCp);

      //보스 몹은 보스 포켓몬을 넣어준다.
      const mapKey = window.location.href.split(":")[3];
      if (pokemon.length)
        isBossMap(mapKey, randomPokemon, randomPosition, randomCp);

      setwildPokemon([...wildPokemon, ...randomPokemon]);
      setPkPosition(randomPosition);
      setCp(randomCp);
    }
  }, [pokemon]);

  useEffect(() => {
    const mapKey = history.location.pathname.split(":")[1];

    const pokemon = Pokemon.pokemon.filter((item) => {
      for (let i = 0; i < monsterTypes[mapKey].length; i++) {
        if (
          item.type.includes(monsterTypes[mapKey][i]) &&
          (item.prev_evolution ? item.prev_evolution.length !== 2 : 1)
        ) {
          return true;
        }
      }
      return false;
    });
    setPokemon(pokemon);
  }, []);

  useEffect(() => {
    //걸음수가 늘어날 때마다 대입해준다.
    let eggs = JSON.parse(localStorage.getItem("myEggs")!);
    let newHatchEggs: Egg[] = [];
    let newEggs: Egg[] = [];
    eggs.forEach((item: Egg, index: number) => {
      item.walk += 1;
      if (item.walk >= item.evolvingWalk) {
        //알 부화처리 화면을 보여주고  부화된 알은  리스트에서 빼준다. 그리고 새로운 랜덤 포켓몬은 나의 포켓몬 목록에 집어넣어준다.
        newHatchEggs.push(item);
      } else {
        newEggs.push(item);
      }
    });

    if (newHatchEggs.length !== 0) {
      window.removeEventListener("keydown", handleKeyPress);
      setHatchEgg(newHatchEggs);
      setTimeout(() => setHatchEgg([]), 11000);
    }

    localStorage.setItem("myEggs", JSON.stringify(newEggs));
  }, [walk]);

  return (
    <CommonMapPresenter
      map={map}
      trainer={trainerImg}
      bag={bag}
      char={char}
      yard={yard}
      setBattle={setBattle}
      charPosition={charPosition}
      frontMove={frontMove}
      windowSize={windowSize}
      pokemon={wildPokemon}
      setPokemons={setwildPokemon}
      randomPosition={pokePosition}
      setPkPosition={setPkPosition}
      battlePokemon={battlePokemon}
      battleon={battleon}
      pokemonsCp={pokemonsCp}
      setCp={setCp}
      run={setRun}
      handleMapChange={handleMapChange}
      handleClickItem={handleClickItem}
      hatchEgg={hatchEgg}
    ></CommonMapPresenter>
  );
};

export default CommonMapContainer;
