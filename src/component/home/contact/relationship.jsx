import styled from "styled-components";

const Container = styled.div({
    marginBottom:'3rem',

    '@media (min-width: 992px)': {
        flex:'0 0 auto',
        width:'40%',
    },
})

const Relationship = () => {
    return ( 
        <Container>
            lorem
        </Container>
    );
}
 
export default Relationship;