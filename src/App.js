import styled from "styled-components";
import Footer from "./component/footer/footer";
import Nav from "./component/header/nav";
import Home from "./component/home/home";

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
