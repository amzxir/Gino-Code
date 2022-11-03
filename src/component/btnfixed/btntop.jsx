import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Button = styled.a({
    width:'48px',
    height:'48px',
    position:'fixed',
    right:'25px',
    bottom:'25px',
    zIndex:'100',
    backgroundColor:'#FF0F10',
    borderRadius:'50%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
})

const BtnTop = () => {

    const scrollTop = () => {
        window.scroll({top:0 , left:0 , behavior: 'smooth'})
    }

    return ( 
        <Button onClick={scrollTop}>
            <FontAwesomeIcon fontSize={20} color='#fff' icon={faArrowUp}/>
        </Button>
    );
}
 
export default BtnTop;