const Modal = (props) => {
    return ( 
        <div className={!props.show?'dNone':'openModal dBlock'}>
            {
            props.children
            }
        </div>
    );
}
 
export default Modal;