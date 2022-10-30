import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div({
    position:'relative',
    marginBottom:'4rem',

    '&> div.breadcrumb':{
        backgroundColor:'#1D2833',
        padding:'8rem 3rem 1rem 3rem',
        display:'flex',
        alignItems:'center',

        '& a':{
            fontSize:'14px',
            color:'#fff',
            fontWeight:'900',
            margin:'5px',
        },

        '& svg':{
            margin:'5px',
            color:'#fff',
            fontSize:'12px',

        }
    }
})

const SingleProduct = () => {
    return ( 
        <Container>
            <div className="breadcrumb bgImages">
                <NavLink to='/'>خانه</NavLink>
                <FontAwesomeIcon icon={faChevronLeft}/>
                <NavLink>مشاهده محصول</NavLink>
            </div>
        </Container>
    );
}
 
export default SingleProduct;