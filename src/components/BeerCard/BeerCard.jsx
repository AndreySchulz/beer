import { useLocation } from "react-router-dom";
import { CardBox, CardImg, CardLink, ImgBox } from "./BeerCard.styled";
import { useState } from "react";

const BeerCard = ({ item }) => {
  const [active, setActive] = useState(true);
  const location = useLocation();
  const { name, image_url, id } = item;

  const handleClick = () => {
    console.log(1321231);
  };
  return (
    <CardBox onContextMenu={handleClick}>
      <CardLink to={`/beer/${id}`} state={location}>
        <ImgBox>
          <CardImg src={image_url} alt={name} />
        </ImgBox>
        <h2>{name}</h2>
      </CardLink>
      {active ? <button></button> : null}
    </CardBox>
  );
};

export default BeerCard;
