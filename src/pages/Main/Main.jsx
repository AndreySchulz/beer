import { useEffect, useState } from "react";
import { useBeerStore } from "../../store/beerStore";
import BeerCard from "../../components/BeerCard/BeerCard";

const Main = () => {
  const listBeer = useBeerStore((state) => state.listBear);
  const fetchBeer = useBeerStore((state) => state.fetchPerPege);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchBeer(page);
  }, [page]);

  return (
    <ul>
      {listBeer.map((item) => {
        return <BeerCard key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default Main;
