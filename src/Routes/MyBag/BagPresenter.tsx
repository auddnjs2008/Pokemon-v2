import React from "react";
import styled from "styled-components";
import Menu from "../../Components/Menu";
import LongMenu from "../../Components/LongMenu";
import Mega from "pokesprite-images/items/mega-stone/banettite.png";
import Alola from "pokesprite-images/items/mega-stone/aggronite.png";
import Color from "pokesprite-images/items/z-crystals/snorlium-z--bag.png";
import { IBagPresenter } from "../../types";
import imageUrls from "../../lib/imagesUrl";

const Container = styled.div<{ windowSize: number }>`
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 0;
  margin-top: ${(props) => (props.windowSize > 810 ? "70px" : "0px")};
  display: grid;
  grid-template-areas:
    "money Badge"
    "other other";
  row-gap: 50px;
`;
const Money = styled.section`
  grid-area: money;

  align-self: center;
  justify-self: center;
  h1 {
    font-size: 30px;
    font-weight: 600;
    img {
      width: 50px;
      height: 50px;
      margin-left: 8px;
    }
  }
`;

const Badge = styled.section<{ windowSize: number }>`
  margin-top: 20px;
  grid-area: Badge;
  justify-self: center;
  width: 300px;
  h1 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Img = styled.img<{ badges: any }>`
  box-shadow: ${(props) =>
    props.badges && props.badges.includes(props.id)
      ? ""
      : "inset 0 2px 4px 2px rgba(0,0,0,.06)"};
  width: 50px;
  height: 50px;
  opacity: ${(props) =>
    props.badges && props.badges.includes(props.id) ? "1" : "0.5"};
`;
const ImgWrapper = styled.ul`
  margin-top: 5px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  grid-auto-rows: 1fr;
  padding: 10px;
  background-color: #f4f5f7;
  box-shadow: inset 0 2px 4px 2px rgba(0, 0, 0, 0.06);
`;

const BallWrapper = styled.section`
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template:
    "title title title " 1fr
    "ball1 ball2 ball3" 2fr/1fr 1fr 1fr;

  h1 {
    grid-area: title;
    font-weight: 600;
  }
  background-color: #d2d6dc;
  padding: 20px;
  &:hover {
    transform: translateY(-10px) scale(1.01, 1.01);
  }
  transition: transform 0.2s linear;
`;

const Ball = styled.div`
  &:nth-child(2) {
    grid-area: ball1;
  }
  &:nth-child(3) {
    grid-area: ball2;
  }
  &:nth-child(4) {
    grid-area: ball3;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    text-align: center;
  }
  div:nth-child(2) {
    color: red;
    padding: 5px;
    box-shadow: inset 0 2px 4px 2px rgba(0, 0, 0, 0.16);
  }
`;
const SubGridWrapper = styled.div`
  grid-area: other;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const PotionWrapper = BallWrapper;
const Potion = Ball;
const EggWrapper = BallWrapper;
const Egg = Ball;
const IncubatorWrapper = BallWrapper;
const Incubator = Ball;
const OthersWrapper = BallWrapper;
const Others = Ball;
const WalkingEggWrapper = BallWrapper;
const WalkingEgg = Ball;
const SpecialWrapper = BallWrapper;
const Special = Ball;

const ShowPokemon = styled.div<{ scroll: number }>`
  position: absolute;
  top: ${(props) =>
    props.scroll ? `${props.scroll + window.innerHeight / 2}px` : "50%"};
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  width: 70%;
  height: 70%;
  border: 1px solid black;
  background-color: black;
  color: white;

  grid-template-rows: 9fr 1fr;
  align-items: center;
  ul {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 200px;
    overflow: auto;
    gap: 5px;

    li {
      height: 200px;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: auto;
        height: auto;
        max-width: 80px;
        max-height: 80px;
        margin-bottom: 5px;
      }
      &:hover {
        background-color: rgba(255, 255, 0, 0.7);
      }
    }
    h2 {
      justify-self: center;
      align-self: center;
      font-size: 30px;
    }
    div {
      span {
        font-size: 20px;
        margin-right: 3px;
        color: black;
        font-weight: 600;
      }
    }
  }
  button {
    width: 100px;
    height: 50px;
    justify-self: center;
    font-size: 20px;
  }
`;

const ShowEgg = styled.div<{ scroll: number }>`
  position: absolute;
  top: ${(props) =>
    props.scroll ? `${props.scroll + window.innerHeight / 2}px` : "50%"};
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  width: 70%;
  height: 70%;
  border: 1px solid black;
  background-color: black;
  color: white;
  grid-template-rows: 9fr 1fr;
  align-items: center;
  li {
    height: 200px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: auto;
      height: auto;
      max-width: 80px;
      max-height: 80px;
      margin-bottom: 5px;
    }
    &:hover {
      background-color: rgba(255, 255, 0, 0.7);
    }
  }
  button {
    width: 100px;
    height: 50px;
    justify-self: center;
    font-size: 20px;
  }
`;

const EvolveWindow = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 200vh;
  background-color: black;
  display: none;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: auto;
    min-width: 80px;
    min-height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:nth-child(1) {
      @keyframes evolve {
        0% {
          z-index: 1;
        }
        100% {
          opacity: 0;
        }
      }
      animation: evolve 1s linear forwards;
      animation-iteration-count: 5;
    }
    &:nth-child(2) {
      transform-origin: center;
      transform: scale(1.5, 1.5) translate(-50%, -50%);
      @keyframes evolvee {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      animation: evolvee 1s linear forwards;
      animation-iteration-count: 5;
    }
  }

  @keyframes windowColor {
    0% {
    }
    100% {
      background-color: #f1c40f;
    }
  }
  animation: windowColor 1s linear forwards;
  animation-iteration-count: 5;
`;

const BagPresenter: React.FC<IBagPresenter> = ({
  evolveUrl,
  evolveWindow,
  showWindow,
  eggWindow,
  scroll,
  windowSize,
  bag,
  egg,
  showPokemon,
  handleUseClick,
  handleSelectPokemon,
  handleSelectEgg,
}) => (
  <>
    {windowSize > 810 ? <LongMenu></LongMenu> : <Menu></Menu>}
    <Container windowSize={windowSize}>
      <Money>
        <h1>
          Your Money:
          <img src={imageUrls.Money} alt={"가방"} /> {bag.money}
        </h1>
      </Money>
      <Badge windowSize={windowSize}>
        <h1>Your Pokemon Badges : {bag.Badges ? bag.Badges.length : 0}</h1>
        <ImgWrapper>
          <Img
            badges={bag.Badges}
            id="Pikachu"
            alt={"가방"}
            src={imageUrls.PickacuBadge}
          />
          <Img
            badges={bag.Badges}
            id="Charmander"
            alt={"가방"}
            src={imageUrls.CharmanderBadge}
          />
          <Img
            badges={bag.Badges}
            id="Squirtle"
            alt={"가방"}
            src={imageUrls.SquirtleBadge}
          />
          <Img
            badges={bag.Badges}
            id="Bullbasaur"
            alt={"가방"}
            src={imageUrls.BullbasaurBadge}
          />
          <Img
            badges={bag.Badges}
            id="Psydux"
            alt={"가방"}
            src={imageUrls.PsyduxBadge}
          />
          <Img
            badges={bag.Badges}
            id="Meowth"
            alt={"가방"}
            src={imageUrls.MeowthBadge}
          />
          <Img
            badges={bag.Badges}
            id="Eevee"
            alt={"가방"}
            src={imageUrls.EeveeBadge}
          />
          <Img
            badges={bag.Badges}
            id="Jigglypuff"
            alt={"가방"}
            src={imageUrls.JigglypuffBadge}
          />
          <Img
            badges={bag.Badges}
            id="Snorlax"
            alt={"가방"}
            src={imageUrls.SnorlaxBadge}
          />
          <Img
            badges={bag.Badges}
            id="Bellsprout"
            alt={"가방"}
            src={imageUrls.BellsproutBadge}
          />
          <Img
            badges={bag.Badges}
            id="Zubat"
            alt={"가방"}
            src={imageUrls.ZubatBadge}
          />
          <Img
            badges={bag.Badges}
            id="Rattata"
            alt={"가방"}
            src={imageUrls.RattataBadge}
          />
          <Img
            badges={bag.Badges}
            id="Pidgey"
            alt={"가방"}
            src={imageUrls.PidgeyBadge}
          />
          <Img
            badges={bag.Badges}
            id="Caterpie"
            alt={"가방"}
            src={imageUrls.CaterpieBadge}
          />
          <Img
            badges={bag.Badges}
            id="Mankey"
            alt={"가방"}
            src={imageUrls.MankeyBadge}
          />
          <Img
            badges={bag.Badges}
            id="Venonat"
            alt={"가방"}
            src={imageUrls.VenonatBadge}
          />
          <Img
            badges={bag.Badges}
            id="Abra"
            alt={"가방"}
            src={imageUrls.AbraBadge}
          />
          <Img
            badges={bag.Badges}
            id="Weedle"
            alt={"가방"}
            src={imageUrls.WeedleBadge}
          />
          <Img
            badges={bag.Badges}
            id="Mew"
            alt={"가방"}
            src={imageUrls.MewBadge}
          />
          <Img
            badges={bag.Badges}
            id="Dratini"
            alt={"가방"}
            src={imageUrls.DratiniBadge}
          />
          <Img
            badges={bag.Badges}
            id="Instinct"
            alt={"가방"}
            src={imageUrls.InstinctBadge}
          />
          <Img
            badges={bag.Badges}
            id="Mystic"
            alt={"가방"}
            src={imageUrls.MysticBadge}
          />
          <Img
            badges={bag.Badges}
            id="Valor"
            alt={"가방"}
            src={imageUrls.ValorBadge}
          />
        </ImgWrapper>
      </Badge>
      <SubGridWrapper>
        <BallWrapper>
          <h1>Ball</h1>
          <Ball>
            <div>
              <img alt={"가방"} src={imageUrls.pokeball} />
              <h2>Poketball</h2>
            </div>
            <div>{bag.pokeball ? bag.pokeball : 0}개</div>
          </Ball>
          <Ball>
            <div>
              <img alt={"가방"} src={imageUrls.superball} />
              <h2>Super-ball</h2>
            </div>
            <div>{bag.superball ? bag.superball : 0}개</div>
          </Ball>
          <Ball>
            <div>
              <img alt={"가방"} src={imageUrls.ultraball} />
              <h2>Ultra-ball</h2>
            </div>
            <div>{bag["ultra-ball"] ? bag["ultra-ball"] : 0}개</div>
          </Ball>
        </BallWrapper>
        <PotionWrapper>
          <h1>Potion</h1>
          <Potion>
            <div>
              <img alt={"가방"} src={imageUrls.Potion} />
              <h2>Potion</h2>
            </div>
            <div>{bag.Potion ? bag.Potion : 0}개</div>
            {bag.Potion ? (
              <button id="Potion" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Potion>
          <Potion>
            <div>
              <img alt={"가방"} src={imageUrls.SuperPotion} />
              <h2>Super-Potion</h2>
            </div>
            <div>{bag.SuperPotion ? bag.SuperPotion : 0}개</div>
            {bag.SuperPotion ? (
              <button id="superPotion" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Potion>
          <Potion>
            <div>
              <img alt={"가방"} src={imageUrls.HyperPotion} />
              <h2>Hyper-Potion</h2>
            </div>
            <div>{bag.HyperPotion ? bag.HyperPotion : 0}개</div>
            {bag.HyperPotion ? (
              <button id="hyperPotion" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Potion>
        </PotionWrapper>
        <EggWrapper>
          <h1>Egg</h1>
          <Egg>
            <div>
              <img alt={"가방"} src={imageUrls.Egg} />
              <h2>Egg</h2>
            </div>
            <div>{bag.Egg ? bag.Egg : 0}개</div>
          </Egg>
          <Egg>
            <div>
              <img alt={"가방"} src={imageUrls.LuckyEgg} />
              <h2>Lucky-Egg</h2>
            </div>
            <div>{bag.LuckyEgg ? bag.LuckyEgg : 0}개</div>
          </Egg>
        </EggWrapper>
        <IncubatorWrapper>
          <h1>Incubator</h1>
          <Incubator>
            <div>
              <img alt={"가방"} src={imageUrls.EggIncubator} />
              <h2>Incubator</h2>
            </div>
            <div>{bag.EggIncubator ? bag.EggIncubator : 0}개</div>
            {bag.EggIncubator ? (
              <button id="EggIncubator" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Incubator>
          <Incubator>
            <div>
              <img alt={"가방"} src={imageUrls.SuperEggIncubator} />
              <h2>Super-Incubator</h2>
            </div>
            <div>{bag.SuperEggIncubator ? bag.SuperEggIncubator : 0}개</div>
            {bag.SuperEggIncubator ? (
              <button id="SuperEggIncubator" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Incubator>
        </IncubatorWrapper>
        <SpecialWrapper>
          <h1>Special Item</h1>
          <Special>
            <div>
              <img alt={"가방"} src={Mega} />
              <h2>Mega Candy</h2>
            </div>
            <div>{bag.MegaCandy ? bag.MegaCandy : 0}개</div>
            {bag.MegaCandy ? (
              <button id="MegaCandy" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Special>
          <Special>
            <div>
              <img alt={"가방"} src={Alola} />
              <h2>Alola Candy</h2>
            </div>
            <div>{bag.AlolaCandy ? bag.AlolaCandy : 0}개</div>
            {bag.AlolaCandy ? (
              <button id="AlolaCandy" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Special>
          <Special>
            <div>
              <img alt={"가방"} src={Color} />
              <h2>Color Changer</h2>
            </div>
            <div>{bag.ColorChanger ? bag.ColorChanger : 0}개</div>
            {bag.ColorChanger ? (
              <button id="ColorChanger" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Special>
        </SpecialWrapper>

        <OthersWrapper>
          <h1>Others</h1>
          <Others>
            <div>
              <img alt={"가방"} src={imageUrls.razzberry} />
              <h2>Razz-berry</h2>
            </div>
            <div>{bag["razz-berry"] ? bag["razz-berry"] : 0}개</div>
          </Others>
          <Others>
            <div>
              <img alt={"가방"} src={imageUrls.Incense} />
              <h2>Incense</h2>
            </div>
            <div>{bag.Incense ? bag.Incense : 0}개</div>
          </Others>
          <Others>
            <div>
              <img alt={"가방"} src={imageUrls.Candy} />
              <h2>Candy</h2>
            </div>
            <div>{bag.Candy ? bag.Candy : 0}개</div>
            {bag.Candy ? (
              <button id="candy" onClick={handleUseClick}>
                사용
              </button>
            ) : (
              ""
            )}
          </Others>
        </OthersWrapper>
        <WalkingEggWrapper>
          <h1>Incubator with Egg</h1>
          {egg.length !== 0
            ? egg.map((item) => (
                <WalkingEgg>
                  <div>
                    <img alt={"가방"} src={item.img} />
                  </div>
                  <div>
                    {item.walk} / {item.evolvingWalk} 걸음
                  </div>
                </WalkingEgg>
              ))
            : ""}
        </WalkingEggWrapper>
      </SubGridWrapper>
    </Container>
    <ShowPokemon ref={showWindow} scroll={scroll}>
      <ul>
        {showPokemon.length !== 0 && showPokemon[0].myId ? (
          showPokemon.map((pokemon) => (
            <li
              key={pokemon.myId}
              id={String(pokemon.myId)}
              onClick={handleSelectPokemon}
            >
              <img
                alt={"가방"}
                src={
                  pokemon.color
                    ? pokemon.specialUrl
                      ? pokemon.specialShinyUrl
                      : pokemon.shinyUrl
                    : pokemon.specialUrl
                    ? pokemon.specialUrl
                    : pokemon.commonUrl
                }
              />
              <div>
                <span>HP:</span> {pokemon.health}
              </div>
              <div>
                <span>CP:</span>
                {pokemon.cp}
              </div>
            </li>
          ))
        ) : (
          <h2>No Pokemon</h2>
        )}
      </ul>
      <button
        onClick={() => {
          if (showWindow.current) showWindow.current.style.display = "none";
        }}
      >
        Close
      </button>
    </ShowPokemon>

    <ShowEgg ref={eggWindow} scroll={scroll}>
      <ul>
        {showPokemon.length !== 0
          ? showPokemon.map((egg, index) =>
              egg !== 0 ? (
                index === 0 ? (
                  <li
                    key={index + 1}
                    id={String(index + 1)}
                    onClick={handleSelectEgg}
                  >
                    <img src={imageUrls.Egg} alt={"가방"} />
                  </li>
                ) : (
                  <li
                    key={index + 1}
                    id={String(index + 1)}
                    onClick={handleSelectEgg}
                  >
                    <img src={imageUrls.LuckyEgg} alt={"가방"} />
                  </li>
                )
              ) : (
                ""
              )
            )
          : "No Eggs"}
      </ul>
      <button
        onClick={() => {
          if (eggWindow.current) eggWindow.current.style.display = "none";
        }}
      >
        Close
      </button>
    </ShowEgg>
    <EvolveWindow ref={evolveWindow}>
      <img alt={"가방"} src={evolveUrl[0]} />
      <img alt={"가방"} src={evolveUrl[1]} />
    </EvolveWindow>
  </>
);
export default BagPresenter;
