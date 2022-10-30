import styled from "styled-components";
import SliderProduct from "./slider";
import images1 from './images/img1.jpeg'
import images2 from './images/img2.jpeg'
import images3 from './images/img3.jpeg'

const Container = styled.div({
    padding:'0px 4rem 0px 4rem',
    marginBottom:'4rem',

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

    const links = {linkOne:'#' , linkTwo:'contact-us'}

    return ( 
        <Container>
            <div className="content">
                <h1 className="contentAfter">{content.name}</h1>
                <div>
                    <a href={links.linkOne} className="btnOne btn">امکانات</a>
                    <a href={`#${links.linkTwo}`} className="btnTwo btn">مشاهده و مشاوره</a>
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