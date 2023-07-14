import { Outlet, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import BeerDetails from "./pages/BeerDetails/BeerDetails";

const Main = lazy(() => import("./pages/Main/Main"));

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="beer/:beerId" element={<BeerDetails />}></Route>
      </Route>
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
