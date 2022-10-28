import styled from "styled-components";
import Card from "./card";
import images1 from './images/team-1.jpeg'
import images2 from './images/team-2.jpeg'
import images3 from './images/team-3.jpeg'
import images4 from './images/team-4.jpeg'
import { faInstagram , faTwitter , faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useContext } from "react";
import Context from "../../../context/context";


const Teams = styled.div({
    padding:'0px 8rem 0px 8rem',
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
    },

    '&> div.row':{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
        
    }
})

const dataContent = {
    title:'تیم ما' , 
    des:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .'
}

const data = [
    {id:1 , images:images1 , name:'امیر احمدی' , profession:'برنامه نویس' , 
    media:[
        {url:'#' , icon:faInstagram},
        {url:'#' , icon:faTwitter},
        {url:'#' , icon:faLinkedinIn},
    ],
    },
    {id:2 , images:images2 , name:'لورم ایپسوم' , profession:'برنامه نویس',
    media:[
        {url:'#' , icon:faInstagram},
        {url:'#' , icon:faTwitter},
        {url:'#' , icon:faLinkedinIn},
    ],
    },
    {id:3 , images:images3 , name:'پیمان تیموریان' , profession:'برنامه نویس',
    media:[
        {url:'#' , icon:faInstagram},
        {url:'#' , icon:faTwitter},
        {url:'#' , icon:faLinkedinIn},
    ],
    },
    {id:4 , images:images4 , name:'لورم ایپسوم' , profession:'برنامه نویس' , 
    media:[
        {url:'#' , icon:faInstagram},
        {url:'#' , icon:faTwitter},
        {url:'#' , icon:faLinkedinIn},
    ],
    }
]

const Team = () => {

    const {navItem} = useContext(Context)

    const link = navItem[3].link

    return ( 
        <Teams id={link}>
            <div className="content">
                <h1 className="contentAfter">{dataContent.title}</h1>
                <p>{dataContent.des}</p>
            </div>
            <div className="row">

                    {data.map((i , index)=> {
                        return(
                            <Card
                            key={index}
                            id={i.id}
                            images={i.images}
                            name={i.name}
                            profession={i.profession}
                            media={i.media}
                            />
                        )
                    })}
            </div>
        </Teams>
    );
}
 
export default Team;