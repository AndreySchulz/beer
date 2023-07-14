import { useLocation } from "react-router-dom";
import { CardBox, CardImg, CardLink, ImgBox } from "./BeerCard.styled";
import { useState } from "react";
import { useBeerStore } from "../../store/beerStore";

const BeerCard = ({ item }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const addSelected = useBeerStore((state) => state.addSelected);

  const { name, image_url, id } = item;

  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);

    addSelected(id);
  };

  return (
    <CardBox onContextMenu={handleClick} className={active ? "active" : null}>
      <CardLink to={`/beer/${id}`} state={location}>
        <ImgBox>
          <CardImg src={image_url} alt={name} />
        </ImgBox>
        <h2>{name}</h2>
      </CardLink>
    </CardBox>
  );
};

export default BeerCard;
