import styled from "styled-components";

const Container = styled.div({
    padding:'0px 4rem 0px 4rem',
    marginBottom:'4rem',

    '@media (max-width: 375px)': {
        padding:'0px 1.3rem 0px 1.3rem',
    },

    '&> div.content':{

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

const Package = () => {
    return ( 
        <Container>
            <div className="content">
                <h1 className="contentAfter">{dataContent.title}</h1>
                <p>{dataContent.description}</p>
            </div>
        </Container>
    );
}
 
export default Package;