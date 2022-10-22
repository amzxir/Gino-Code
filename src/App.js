import styled from "styled-components";
import Nav from "./component/header/nav";

const Garden = styled.div({
direction:'rtl',
})

function App() {
  return (
    <Garden>
      <Nav/>
    </Garden>
  );
}

export default App;
