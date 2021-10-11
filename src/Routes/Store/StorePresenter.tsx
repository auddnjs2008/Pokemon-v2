import React from "react";
import styled from "styled-components";
import Menu from "../../Components/Menu";
import LongMenu from "../../Components/LongMenu";
import Message from "../../Components/Message";
import Mega from "pokesprite-images/items/mega-stone/banettite.png";
import Alola from "pokesprite-images/items/mega-stone/aggronite.png";
import Color from "pokesprite-images/items/z-crystals/snorlium-z--bag.png";
import { IStorePresenter } from "../../types";
import imageUrls from "../../lib/imagesUrl";

const Container = styled.div<{ windowSize: number }>`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 10px;
  grid-row-gap: 20px;
  margin-top: ${(props) => (props.windowSize > 810 ? "70px" : "0px")};
`;

const text =
  "If you have 10 Badges or have all Badges,you can get a special Pokemon randomly";

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  transition: transform 0.2s linear;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 5px;
`;

const InfoWrapper = styled.div<{ scroll: number }>`
  width: 70%;
  height: 70%;
  position: absolute;
  top: ${(props) =>
    props.scroll ? `${props.scroll + window.innerHeight / 2}px` : "50%"};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: none;
  background-color: black;
  color: white;
  grid-template-areas:
    "profile profile content content"
    "profile profile content content"
    "profile profile content content"
    "price price price price"
    "button button button button";
  justify-items: center;
  padding: 20px;
`;

const InfoProfile = styled.div`
  img {
    width: auto;
    height: auto;
    min-width: 200px;
    min-height: 200px;
    max-width: 250px;
    max-height: 250px;
    margin-bottom: 5px;
  }
  margin-right: 10px;

  grid-area: profile;
  text-align: center;
  div {
    font-size: 25px;
  }
`;

const InfoContent = styled.p`
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  font-size: 25px;
`;
const PriceWrapper = styled.div`
  width: 100%;
  grid-area: price;
  img {
    width: 35px;
    height: 35px;
    margin-right: 5px;
    margin-left: 5px;
  }

  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
  }
`;
const BtnWrapper = styled.div`
  grid-area: button;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    width: 100px;
    height: 30px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  &.stone {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

const StorePresenter: React.FC<IStorePresenter> = ({
  windowSize,
  handleItemClick,
  handleClose,
  handleBuyBtn,
  name,
  info,
  img,
  money,
  scroll,
  myMoney,
  message,
  setMessage,
}) => (
  <>
    {windowSize > 810 ? <LongMenu></LongMenu> : <Menu></Menu>}
    <Container windowSize={windowSize}>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "pokeball",
            "You can catch pokemon by using this Item",
            imageUrls.pokeball,
            25
          )
        }
      >
        <Img src={imageUrls.pokeball} />
        <Title>PokeBall</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "superball",
            "You can catch pokemon by using this Item",
            imageUrls.superball,
            35
          )
        }
      >
        <Img src={imageUrls.superball} />
        <Title>Super-Ball</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "ultra-ball",
            "You can catch pokemon by using this Item",
            imageUrls.ultraball,
            45
          )
        }
      >
        <Img src={imageUrls.ultraball} />
        <Title>Ultra-Ball</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "pokeballs",
            "You can catch pokemon by using this Item",
            imageUrls.pokeballs,
            65
          )
        }
      >
        <Img src={imageUrls.pokeballs} />
        <Title>Pokeballs</Title>
      </ImgWrapper>

      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "Incense",
            "There could be more Pokemons by using Item",
            imageUrls.Incense,
            30
          )
        }
      >
        <Img src={imageUrls.Incense} />
        <Title>Incense</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "Incenses",
            "There could be more Pokemons by using Item",
            imageUrls.Incenses,
            75
          )
        }
      >
        <Img src={imageUrls.Incenses} />
        <Title>Incenses</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "razz-berry",
            "When you are trying to catch Pokemon, you can get Pokemon easily by using this",
            imageUrls.razzberry,
            30
          )
        }
      >
        <Img src={imageUrls.razzberry} />
        <Title>Razz-Berry</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "Potion",
            "Can hill the Pokemon HP",
            imageUrls.Potion,
            10
          )
        }
      >
        <Img src={imageUrls.Potion} />
        <Title>Potion</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "SuperPotion",
            "Can hill the Pokemon HP",
            imageUrls.SuperPotion,
            20
          )
        }
      >
        <Img src={imageUrls.SuperPotion} />
        <Title>Super-Potion</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "HyperPotion",
            "Can hill the Pokemon HP",
            imageUrls.HyperPotion,
            30
          )
        }
      >
        <Img src={imageUrls.HyperPotion} />
        <Title>Hyper-Potion</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Egg", "You can get Basic Pokemon", imageUrls.Egg, 40)
        }
      >
        <Img src={imageUrls.Egg} />
        <Title>Egg</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "LuckyEgg",
            "You can get all Pokemon",
            imageUrls.LuckyEgg,
            60
          )
        }
      >
        <Img src={imageUrls.LuckyEgg} />
        <Title>Lucky-Egg</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "EggIncubator",
            "You can hatch an egg, it takes about 5days",
            imageUrls.EggIncubator,
            25
          )
        }
      >
        <Img src={imageUrls.EggIncubator} />
        <Title>Egg-Incubator</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "SuperEggIncubator",
            "You can hatch an egg, it takes about 3days",
            imageUrls.SuperEggIncubator,
            35
          )
        }
      >
        <Img src={imageUrls.SuperEggIncubator} />
        <Title>Super-Egg-Incubator</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "Candy",
            "This helpes evolving Any Pokemon regardless of Kind",
            imageUrls.Candy,
            25
          )
        }
      >
        <Img src={imageUrls.Candy} />
        <Title>Candy</Title>
      </ImgWrapper>
      <ImgWrapper>
        <Img
          className="stone"
          src={Mega}
          onClick={() =>
            handleItemClick(
              "MegaCandy",
              "This helpes evolving  Mega Pokemon or MegaXY Pokemon",
              Mega,
              3000
            )
          }
        />
        <Title>Mega Candy</Title>
      </ImgWrapper>
      <ImgWrapper>
        <Img
          className="stone"
          src={Alola}
          onClick={() =>
            handleItemClick(
              "AlolaCandy",
              "This helpes evoving alola Pokemon",
              Alola,
              3000
            )
          }
        />
        <Title>Alola Candy</Title>
      </ImgWrapper>
      <ImgWrapper>
        <Img
          className="stone"
          src={Color}
          onClick={() =>
            handleItemClick(
              "ColorChanger",
              "This helpes changing Pokemon's color",
              Color,
              1500
            )
          }
        />
        <Title>Color Changer</Title>
      </ImgWrapper>

      <ImgWrapper
        onClick={() =>
          handleItemClick("Pikachu-Badge", text, imageUrls.PickacuBadge, 25)
        }
      >
        <Img src={imageUrls.PickacuBadge} />
        <Title>Pikachu-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "Charmander-Badge",
            text,
            imageUrls.CharmanderBadge,
            25
          )
        }
      >
        <Img src={imageUrls.CharmanderBadge} />
        <Title>Charmandar-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Squirtle-Badge", text, imageUrls.SquirtleBadge, 25)
        }
      >
        <Img src={imageUrls.SquirtleBadge} />
        <Title>Squirtle-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "Bullbasaur-Badge",
            text,
            imageUrls.BullbasaurBadge,
            25
          )
        }
      >
        <Img src={imageUrls.BullbasaurBadge} />
        <Title>Bullbasaur-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Psydux-Badge", text, imageUrls.PsyduxBadge, 25)
        }
      >
        <Img src={imageUrls.PsyduxBadge} />
        <Title>Psydux-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Meowth-Badge", text, imageUrls.MeowthBadge, 25)
        }
      >
        <Img src={imageUrls.MeowthBadge} />
        <Title>Meowth-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Eevee-Badge", text, imageUrls.EeveeBadge, 25)
        }
      >
        <Img src={imageUrls.EeveeBadge} />
        <Title>Eevee-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "Jigglypuff-Badge",
            text,
            imageUrls.JigglypuffBadge,
            25
          )
        }
      >
        <Img src={imageUrls.JigglypuffBadge} />
        <Title>Jigglypuff-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Snorlax-Badge", text, imageUrls.SnorlaxBadge, 25)
        }
      >
        <Img src={imageUrls.SnorlaxBadge} />
        <Title>Snorlax-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick(
            "Bellsprout-Badge",
            text,
            imageUrls.BellsproutBadge,
            25
          )
        }
      >
        <Img src={imageUrls.BellsproutBadge} />
        <Title>Bellsprout-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Zubat-Badge", text, imageUrls.ZubatBadge, 25)
        }
      >
        <Img src={imageUrls.ZubatBadge} />
        <Title>Zubat-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Rattata-Badge", text, imageUrls.RattataBadge, 25)
        }
      >
        <Img src={imageUrls.RattataBadge} />
        <Title>Rattata-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Pidgey-Badge", text, imageUrls.PidgeyBadge, 25)
        }
      >
        <Img src={imageUrls.PidgeyBadge} />
        <Title>Pidgey-Badge</Title>
      </ImgWrapper>

      <ImgWrapper
        onClick={() =>
          handleItemClick("Caterpie-Badge", text, imageUrls.CaterpieBadge, 25)
        }
      >
        <Img src={imageUrls.CaterpieBadge} />
        <Title>Caterpie-Badge</Title>
      </ImgWrapper>

      <ImgWrapper
        onClick={() =>
          handleItemClick("Mankey-Badge", text, imageUrls.MankeyBadge, 25)
        }
      >
        <Img src={imageUrls.MankeyBadge} />
        <Title>Mankey-Badge</Title>
      </ImgWrapper>

      <ImgWrapper
        onClick={() =>
          handleItemClick("Venonat-Badge", text, imageUrls.VenonatBadge, 25)
        }
      >
        <Img src={imageUrls.VenonatBadge} />
        <Title>Venonat-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Abra-Badge", text, imageUrls.AbraBadge, 25)
        }
      >
        <Img src={imageUrls.AbraBadge} />
        <Title>Abra-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Weedle-Badge", text, imageUrls.WeedleBadge, 25)
        }
      >
        <Img src={imageUrls.WeedleBadge} />
        <Title>Weedle-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Mew-Badge", text, imageUrls.MewBadge, 25)
        }
      >
        <Img src={imageUrls.MewBadge} />
        <Title>Mew-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Dratini-Badge", text, imageUrls.DratiniBadge, 25)
        }
      >
        <Img src={imageUrls.DratiniBadge} />
        <Title>Dratini-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Instinct-Badge", text, imageUrls.InstinctBadge, 25)
        }
      >
        <Img src={imageUrls.InstinctBadge} />
        <Title>Instinct-Badge</Title>
      </ImgWrapper>

      <ImgWrapper
        onClick={() =>
          handleItemClick("Mystic-Badge", text, imageUrls.MysticBadge, 25)
        }
      >
        <Img src={imageUrls.MysticBadge} />
        <Title>Mystic-Badge</Title>
      </ImgWrapper>
      <ImgWrapper
        onClick={() =>
          handleItemClick("Valor-Badge", text, imageUrls.ValorBadge, 25)
        }
      >
        <Img src={imageUrls.ValorBadge} />
        <Title>Valor-Badge</Title>
      </ImgWrapper>
    </Container>
    <InfoWrapper className="InfoWrapper" scroll={scroll}>
      <InfoProfile>
        <img src={img} />
        <div>{name}</div>
      </InfoProfile>
      <InfoContent>{info}</InfoContent>
      <PriceWrapper>
        <div>
          Your Money : <img src={imageUrls.Money} />
          {myMoney}
        </div>
        <div>
          Price : {<img src={imageUrls.Money} />} {money}
        </div>
      </PriceWrapper>
      <BtnWrapper>
        <button onClick={handleBuyBtn}>Buy</button>
        <button onClick={handleClose}>Close</button>
      </BtnWrapper>
    </InfoWrapper>
    <Message message={message} setMessage={setMessage}></Message>
  </>
);

export default StorePresenter;
