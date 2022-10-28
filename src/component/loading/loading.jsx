import styled from "styled-components";
import './loading.css'

const Container = styled.div({

})

const Loading = () => {
    return ( 
        <Container>
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        </Container>
    );
}
 
export default Loading;