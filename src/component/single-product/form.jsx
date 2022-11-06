import { useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';


const Container = styled.div({
    // '@media (min-width: 992px)': {
    //     flex:'0 0 auto',
    //     width:'30%',
    // },
    width:'100%',

    '&> div.card':{
        // backgroundColor:'#F7F7F7',
        // boxShadow:'0 .125rem .25rem #dddddd',


        '&> form.cardBody':{
            // padding:'1.5rem',
            // marginRight:'auto',
            // marginLeft:'auto',


            '&> p':{
                fontSize:'18px',
                marginBlockStart:'0',
                fontWeight:'500',
                
            },

            '&> div.formGroup':{
                marginBottom:'1rem',
                
                '& input':{

                }
            },

            '&> button':{
                backgroundColor:'#FF0F10',
                borderColor:'#FF0F10',
                color:'#fff',
                width:'100%',
            }
        }
    }
})


const FormProduct = (props) => {

    return ( 
        <Container>
            <div className="card">
                <form onSubmit={props.handelSubmit} className="cardBody">
                    <div className="formGroup">
                        <input type="text" className="formControl" placeholder="شماره موبایل" name="mobile" value={props.input.mobile || ''} onChange={props.handelChange}  />
                    </div>
                    <div className="formGroup">
                        <select onChange={props.handelChange} className="formControl" name="number">
                            <option value={''}>تعداد سازمان</option>
                            <option value={10 || props.input.number}>10</option>
                            <option value={25 || props.input.number}>25</option>
                            <option value={50 || props.input.number}>50</option>
                            <option value={100 || props.input.number}>100</option>
                        </select>
                    </div>
                </form>
            </div>
        </Container>
    );
}
 
export default FormProduct;