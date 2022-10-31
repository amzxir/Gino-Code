import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Content from "./content";
import FormProduct from "./form";


const Container = styled.div({
    position:'relative',
    marginBottom:'4rem',

    

    '&> div.breadcrumb':{
        backgroundColor:'#1D2833',
        padding:'8rem 2rem 1rem 2rem',
        display:'flex',
        alignItems:'center',

        '@media (max-width: 992px)': {
            padding:'1rem 2rem 1rem 2rem',
        },

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
    },

    '&> div.product':{
        padding:'0px 4rem 0px 4rem',
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
            <div className="product">
                <Content/>
                <FormProduct/>
            </div>
        </Container>
    );
}
 
export default SingleProduct;