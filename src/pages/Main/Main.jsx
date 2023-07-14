import { useEffect, useState } from "react";
import { useBeerStore } from "../../store/beerStore";
import BeerCard from "../../components/BeerCard/BeerCard";
import { CardList, Container, DeleteBtn, NextPageBtn } from "./Main.styled";

const Main = () => {
  const listBeer = useBeerStore((state) => state.listBeer);
  const fetchBeer = useBeerStore((state) => state.fetchPerPege);
  const selectedBeer = useBeerStore((state) => state.selectedBeer);
  const clearSelected = useBeerStore((state) => state.clearSelected);
  const deleteId = useBeerStore((state) => state.deleteById);

  const [page, setPage] = useState(1);
  const [sliceArr, setSliceArr] = useState({ start: 0, end: 15 });

  const paginBeer = listBeer.slice(sliceArr.start, sliceArr.end);

  const NewPageBeer = () => {
    setPage((prev) => prev + 1);
    fetchBeer(page);
    setSliceArr({ start: 0, end: 15 });
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <=
        document.documentElement.offsetHeight ||
      sliceArr.end === 25
    ) {
      return;
    }
    setSliceArr((prev) => ({
      start: prev.start + 5,
      end: prev.end + 5,
    }));
  };

  useEffect(() => {
    if (listBeer.length !== 0) {
      return;
    }

    fetchBeer(page);
  }, [page, listBeer, fetchBeer]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [sliceArr]);

  return (
    <Container>
      {selectedBeer.length !== 0 ? (
        <DeleteBtn
          type="button"
          onClick={() => {
            deleteId();
            clearSelected();
          }}
        >
          Delete
        </DeleteBtn>
      ) : null}
      <CardList>
        {paginBeer.map((item) => {
          return <BeerCard key={item.id} item={item} />;
        })}
      </CardList>
      <NextPageBtn type="button" onClick={NewPageBeer}>
        Next page
      </NextPageBtn>
    </Container>
  );
};

export default Main;
