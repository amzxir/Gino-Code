import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarked , faPhoneAlt , faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div({
    marginBottom:'3rem',

    '@media (min-width: 992px)': {
        flex:'0 0 auto',
        width:'40%',
    },

    '&> div':{
        marginBottom:'1rem',

        '&> a.content':{
            fontSize:'14px',
            fontWeight:'500',
            color:'#5A5A5A',
        }
    }
})

const data = [
    {content:' البرز ، جهانشهر' , icon:faMapMarked , link:'#'},
    {content:'0937 902 6444 - 02691010046 - 02691010047 - 02691010048 ' , icon:faPhoneAlt , link:'#'},
    {content:'info@example.com ' , icon:faSquareEnvelope , link:'#'},

]

const Relationship = () => {
    return ( 
        <Container>
            {data.map((i , index)=> {
                return(
                    <div key={index}><a className="content" href={i.link}><FontAwesomeIcon color="#CDAC81" icon={i.icon}/> {i.content}</a></div>
                )
            })}

        </Container>
    );
}
 
export default Relationship;