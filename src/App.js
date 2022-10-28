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

  const [isLoading , setIsLoading] = useState(undefined);

  useEffect(()=> {
    setIsLoading(true)
  }, [])

  return (
    <>
      {!isLoading ? <Loading/> : 
        <Garden>
          <Nav/>
          <Home/>
          <Footer/>
        </Garden>
      }
    </>
  );
}

export default App;
