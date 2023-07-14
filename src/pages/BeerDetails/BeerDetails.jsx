import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBeerStore } from "../../store/beerStore";
import { useEffect } from "react";
import { BearImg, Container, BackLink } from "./BeerDetails.styled";

const BeerDetails = (state) => {
  const location = useLocation();
  const { beerId } = useParams();
  const listBeer = useBeerStore((state) => state.listBeer);

  const { name, description, image_url } = listBeer.find(
    (option) => option.id === Number(beerId)
  );

  useEffect(() => {}, []);
  return (
    <Container>
      <BackLink to={location.state}>Go back</BackLink>
      <BearImg src={image_url} />
      <h1>{name}</h1>
      <p>{description}</p>
    </Container>
  );
};

export default BeerDetails;
