import styled from "styled-components";

const Container = styled.div({

    '&> div.formGroup':{
        marginBottom:'1rem',
    },

    '& .btnDan':{
        color:'#fff',
        fontWeight:'600',
        backgroundColor:'#FF0F10',
        borderColor:'#FF0F10',
        padding:'0.375rem 0.75rem',
        width:'100%'
    }
})

const Form = () => {
    return ( 
        <Container>
            <div className="formGroup">
                <input type="text" className="formControl" placeholder="نام و نام خانوادگی" />
            </div>
            <div className="formGroup">
                <input type="text" className="formControl" placeholder="شماره موبایل" />
            </div>
            <div className="formGroup">
                <textarea type="text" className="formControl" placeholder="پیام" ></textarea>
            </div>
            <button className="btn btnDan">ارسال</button>
        </Container>
    );
}
 
export default Form;