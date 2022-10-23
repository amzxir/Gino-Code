import styled from "styled-components";
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
    </Garden>
  );
}

export default App;
