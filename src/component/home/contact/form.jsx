import styled from "styled-components";

const Forms = styled.div({
    marginBottom:'3rem',

    '@media (min-width: 992px)': {
        flex:'0 0 auto',
        width:'40%',
    },

    '&> form':{

        '&> div.row':{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            flexWrap:'wrap',
            '&> div.formGroup':{
                
                '& input':{
    
                }
            }
        },

    },

    '& .col6':{
        flex:'0 0 auto',
        width:'48%',
        marginBottom:'1rem',
    },

    '& .col12':{
        flex:'0 0 auto',
        width:'100%',
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
        <Forms>
            <form>
                <div className="row">
                    <div className="col6">
                        <div className="formGroup">
                            <input type="text" className="formControl" placeholder="نام و نام خانوادگی" />
                        </div>
                    </div>
                    <div className="col6">
                        <div className="formGroup">
                            <input type="text" className="formControl" placeholder="ایمیل" />
                        </div>
                    </div>
                    <div className="col12">
                        <div className="formGroup">
                            <input type="text" className="formControl" placeholder="موضوع"/>
                        </div>
                    </div>
                    <div className="col12">
                        <div className="formGroup">
                            <textarea className="formControl" rows="5" placeholder="پیام"></textarea>
                        </div>
                    </div>
                    <div className="col12">
                        <button className="btn btnDan">ارسال</button>
                    </div>
                </div>
            </form>
        </Forms>
    );
}
 
export default Form;