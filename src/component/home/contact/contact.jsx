import { useContext } from "react";
import styled from "styled-components";
import Context from "../../../context/context";
import Form from "./form";
import Relationship from "./relationship";

const Contacts = styled.div({
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
    },

    '&> div.row':{
  
        '@media (min-width: 992px)': {
            display:'flex',
            justifyContent:'space-evenly',
            flexDirection:'row',
        },
    }
})

const dataContent = {
    title:'با ما تماس بگیرید' , 
    description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
}

const Contact = () => {

    const {navItem} = useContext(Context)
    
    const link = navItem[4].link

    return ( 
        <Contacts id={link}>
            <div className="content">
                <h1 className="contentAfter">{dataContent.title}</h1>
                <p>{dataContent.description}</p>
            </div>
            <div className="row">
                <Relationship/>
                <Form/>
            </div>
        </Contacts>
    );
}
 
export default Contact;