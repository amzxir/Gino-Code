import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Content from "./content";
import FormProduct from "./form";
import images1 from './images/img1.jpeg'
import images2 from './images/img2.jpeg'
import images3 from './images/img3.jpeg'


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

const data = [
    {
        id:1 , 
        name:'اتوماسیون اداری ژینو' , 
        description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،',
        feature:[
            {name: 'امکانات' , item:[
                'لورم ایپسوم',
                'لورم ایپسوم متن',
                'لورم ایپسوم',
                'لورم ایپسوم متن',
                'لورم ایپسوم',
                'لورم ایپسوم متن',
            ]},

            {name: 'ویژگی ها' , item:[
                'لورم ایپسوم',
                'لورم ایپسوم متن',
                'لورم ایپسوم',
                'لورم ایپسوم متن',
                'لورم ایپسوم',
                'لورم ایپسوم متن',
            ]},
        ],

    }
]

const slider = [
    {img:images1},
    {img:images2},
    {img:images3},
]

const SingleProduct = () => {
    return ( 
        <Container>
            <div className="breadcrumb bgImages">
                <NavLink to='/'>خانه</NavLink>
                <FontAwesomeIcon icon={faChevronLeft}/>
                <NavLink>مشاهده محصول</NavLink>
            </div>
            <div className="product">
                <Content
                imgSlider={slider}
                data={data}
                />
                <FormProduct/>
            </div>
        </Container>
    );
}
 
export default SingleProduct;