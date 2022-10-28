import { useEffect , useState } from "react";
import styled from "styled-components";
import Footer from "./component/footer/footer";
import Nav from "./component/header/nav";
import Home from "./component/home/home";
import Loading from "./component/loading/loading";

const Garden = styled.div({
  direction:'rtl',
})


function App() {  

  return (
    <Garden>
      <Nav/>
      <Home/>
      <Footer/>
    </Garden>
  );
}

export default App;
