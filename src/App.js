import { useEffect , useState } from "react";
import styled from "styled-components";
import Footer from "./component/footer/footer";
import Nav from "./component/header/nav";
import Home from "./component/home/home";
import Loading from "./component/loading/loading";
import Context from "./context/context";


const Garden = styled.div({
  direction:'rtl',
})

const navItem = [
  {id:1 , name:'خانه' , link:'home'},
  {id:1 , name:'درباره ما' , link:'about-us'},
  {id:1 , name:'پکیج‌ ها' , link:'package'},
  {id:1 , name:'تیم ما' , link:'team'},
  {id:1 , name:'تماس با ما' , link:'contact-us'},
]

function App() {  

  const [isLoading , setIsLoading] = useState(undefined);

  useEffect(()=> {
    setIsLoading(true)
  }, [])

  return (
    <Context.Provider value={{ 
        navItem,
      }}>
      {!isLoading ? <Loading/> : 
        <Garden>
          <Nav/>
          <Home/>
          <Footer/>
        </Garden>
      }
    </Context.Provider>
  );
}

export default App;
