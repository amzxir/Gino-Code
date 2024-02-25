import { useContext } from "react";
import Context from "../../context/context";

const Modal = (props) => {

    const {setModal} = useContext(Context)

    return ( 
        <div className={!props.show?'dNone':'openModal dBlock'}>
            {
            props.children
            }
        </div>
    );
}
 
export default Modal;