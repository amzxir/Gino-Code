import { useContext } from "react";
import Context from "../../context/context";

const Modal = (props) => {

    const {modal , setModal} = useContext(Context)

    return ( 
        <div className={!props.show?'dNone':'openModal dBlock'} onClick={()=> setModal(true)}>
            {
            props.children
            }
        </div>
    );
}
 
export default Modal;