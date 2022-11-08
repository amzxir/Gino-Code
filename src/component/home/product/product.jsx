import styled from "styled-components";
import SliderProduct from "./slider";
import images1 from './images/img1.png'
import images2 from './images/img2.png'
import images3 from './images/img3.png'
import {NavLink} from "react-router-dom";
import { useContext } from "react";
import Context from "../../../context/context";


const Container = styled.div({
    padding:'0px 4rem 0px 4rem',
    marginBottom:'4rem',

    '@media (max-width: 500px)': {
        padding:'0px 1.5rem 0px 1.5rem',
    },

    '&> div.content':{
        marginBottom:'4rem',
        textAlign:'center',

        '& h1':{
            fontWeight:'700',
            lineHeight:'1.2',
            position:'relative',
            paddingBottom:'30px',
        },

        '& p':{
            lineHeight:'2',
            color:'#5A5A5A',
        },

        '&> div':{

            '&> a.btnOne':{
                color:'#fff',
                fontWeight:'600',
                backgroundColor:'#FF0F10',
                borderColor:'#FF0F10',
                margin:'10px',
                width:'125px',
            },

            '&> a.btnTwo':{
                color:'#fff',
                fontWeight:'600',
                backgroundColor:'#CDAC81',
                borderColor:'#CDAC81',
                margin:'10px',
                width:'125px',
            },
        }
    }
})

const content = {
    name:'اتوماسیون اداری' , 
    description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .'
}

const imgSlider = [
    {images:images1},
    {images:images2},
    {images:images3},
]

const Product = () => {

    const links = {linkTwo:'contact-us'} 

    const {navItem} = useContext(Context)

    const link = navItem[2].link 

    return ( 
        <Container id={link}>
            <div className="content">
                <h1 className="contentAfter">{content.name}</h1>
                <div>
                    <NavLink to='/single-product' className="btnOne btn">امکانات</NavLink>
                    <a href={`#${links.linkTwo}`} className="btnTwo btn">مشاهده - مشاوره</a>
                </div>
                <p>{content.description}</p>
            </div>
            <div className="slider">
                <SliderProduct 
                images={imgSlider}
                />
            </div>
        </Container>
    );
}
 
export default Product;