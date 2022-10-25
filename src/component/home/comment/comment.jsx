import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import './dots.css'

const Card = styled.div({


    margin:'25px 15px 25px 15px',
    borderRadius:'8px',
    borderColor:'#CDAC81',
    padding:'1.5rem',
    backgroundColor:'#F2F2F2',
    borderTop:'5px solid #CDAC81',
    position:'relative',
    height:'fit-content',


    '&> div.icon':{
        position:'absolute',
        top:'-25px',
        left:'10%',
        width:'45px',
        height:'45px',
        backgroundColor:'#CDAC81',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'50%',
        color:'#fff',
    },

    '&> div.content':{
        direction:'rtl',
        '& p':{
            color:'#5A5A5A',
            fontSize:'16px',
            lineHeight:'1.5',

        }
    },


})

const Comments = styled.div({
    padding:'0px 4rem 0px 4rem',
    marginBottom:'4rem',

    '& .dote':{
        position:'relative',
        display:'inline-block',
        margin:'0 5px',
        width:'15px',
        height:'15px',
        background:'#DDDDDD',
        borderRadius:'50%'
    }
})

const data = [
    {id:1 , com:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون'},
    {id:2 , com:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'},
    {id:3 , com:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون'},
    {id:4 , com:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون'},

]

const Comment = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        rtl:true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
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

    return ( 
        <Comments >
            <Slider {...settings}>
                    {data.map((i , index)=> {
                        return(
                            <div key={index}>
                                <Card>
                                    <div className="icon"><FontAwesomeIcon icon={faQuoteLeft}/></div>
                                    <div className="content">
                                        <p>{i.com}</p>
                                    </div>
                                </Card>
                            </div>
                        )
                    })}
            </Slider>
        </Comments>
    );
}
 
export default Comment;