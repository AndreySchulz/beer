import { useEffect, useState } from "react";
import { useBeerStore } from "../../store/beerStore";
import BeerCard from "../../components/BeerCard/BeerCard";
import { CardList } from "./Main.styled";

const Main = () => {
  const listBeer = useBeerStore((state) => state.listBeer);
  const fetchBeer = useBeerStore((state) => state.fetchPerPege);
  const selectedBeer = useBeerStore((state) => state.selectedBeer);
  const deleteId = useBeerStore((state) => state.deleteById);

  const [page, setPage] = useState(1);
  const [sliceArr, setSliceArr] = useState({ start: 0, end: 15 });

  const paginBeer = listBeer.slice(sliceArr.start, sliceArr.end);

  const NextPackBeer = () => {
    setSliceArr((prev) => ({
      ...prev,
      start: prev.start + 5,
      end: prev.end + 5,
    }));
  };
  const NewPageBeer = () => {
    setPage((prev) => prev + 1);
    fetchBeer(page);
    setSliceArr({ start: 0, end: 15 });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (listBeer.length !== 0) {
      return;
    }

    fetchBeer(page);
  }, [page]);

  return (
    <>
      {selectedBeer.length !== 0 ? (
        <button
          type="button"
          onClick={() => {
            deleteId();
          }}
        >
          Delete
        </button>
      ) : null}
      <CardList>
        {paginBeer.map((item) => {
          return <BeerCard key={item.id} item={item} />;
        })}
      </CardList>
      {listBeer.length !== sliceArr.end ? (
        <button onClick={NextPackBeer}>Load more</button>
      ) : (
        <button onClick={NewPageBeer}>Load moresss</button>
      )}
    </>
  );
};

export default Main;
