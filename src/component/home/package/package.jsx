import styled from "styled-components";
import Slider from "react-slick";
import Card from "./card";
import { faGear , faServer , faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import Context from "../../../context/context";

const Container = styled.div({
    padding:'0px 4rem 0px 4rem',
    marginBottom:'4rem',

    '@media (max-width: 375px)': {
        padding:'0px 1.3rem 0px 1.3rem',
    },

    '&> div.content':{
        marginBottom:'4rem',

        '& h1':{
            fontWeight:'700',
            lineHeight:'1.2',
            position:'relative',
            paddingBottom:'30px',
        },

        '& p':{
            lineHeight:'2',
            color:'#5A5A5A',
        }
    }
})

const dataContent = {
    title:'پکیج های ما' , 
    description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
}

const data = [
    {id:1 , title:'پکیج طلایی' , icon:faGear ,  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.' , discount:'30' , price:'350',features:
    ['لورم ایپسوم' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی']},
    {id:2 , title:'پکیج برنز' , icon:faServer ,  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.' , discount:'30' , price:'190',features:
    ['لورم ایپسوم' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی']},
    {id:3 , title:'پکیج نقره' , icon:faShareAlt ,  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.' , discount:'30' , price:'120',features:
    ['لورم ایپسوم' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی' , 'لورم ایپسوم متن ساختگی']},
]

const Package = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        rtl: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const {navItem} = useContext(Context)

    const link = navItem[2].link

    return ( 
        <Container id={link}>
            <div className="content">
                <h1 className="contentAfter">{dataContent.title}</h1>
                <p>{dataContent.description}</p>
            </div>
            <Slider {...settings}>
            {data.map((i , index)=>{
                return(
                    <div key={index}>
                        <Card 
                            icon={i.icon}
                            title={i.title}
                            des={i.description}
                            discount={i.discount}
                            price={i.price}
                            features={i.features}
                        />
                    </div>
                )
            })}
            </Slider>
        </Container>
    );
}
 
export default Package;