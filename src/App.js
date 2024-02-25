import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./components/footer/footer";
import Nav from "./components/header/nav";
import Home from "./components/home/home";
import Loading from "./components/loading/loading";
import Context from "./context/context";
import "react-toastify/dist/ReactToastify.css";
import SingleProduct from "./components/single-product/single";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Garden = styled.div({
  direction: "rtl",
});

const navItem = [
  { id: 1, name: "خانه", link: "home" },
  { id: 1, name: "درباره ما", link: "about-us" },
  { id: 1, name: "محصولات", link: "product" },
  { id: 1, name: "تیم ما", link: "team" },
  { id: 1, name: "تماس با ما", link: "contact-us" },
];

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const [active, setActive] = useState();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });



  return (
    <Context.Provider value={{ navItem, active, setActive, modal, setModal}}>
      {!isLoading ? (
        <Loading />
      ) : (
        <Garden>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single-product" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </Garden>
      )}

      <ToastContainer rtl={true} theme="dark" style={{ zIndex: "10000000" }} />
    </Context.Provider>
  );
}

export default App;
