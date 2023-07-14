import { useLocation } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { useBeerStore } from "../../store/beerStore";
import { useEffect } from "react";

const BeerDetails = (state) => {
  const location = useLocation();
  const { beerId } = useParams();
  const listBeer = useBeerStore((state) => state.listBear);

  const findBaer = listBeer.find((option) => option.id === Number(beerId));
  console.log(findBaer);

  useEffect(() => {}, []);
  return <Link to={location.state}>Go back</Link>;
};

export default BeerDetails;
