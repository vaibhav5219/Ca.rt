import { Fragment } from "react";
import { Backdrop } from "./Loader";
import  ReactDOM  from "react-dom";

const Modal = ({onClose, children}) =>{
    return (
        <Fragment>
            {
                ReactDOM.createPortal(
                    <Fragment>
                         <Backdrop onClick={onClose}></Backdrop> 
                        <div className="modal-react">
                            <button type="close" onClick={onClose}>X</button>
                            <div className="content">{children}</div>
                        </div>
                    </Fragment>
                    ,
                    document.getElementById("modal-root")
                )
            }
        </Fragment>
    )
}

export default Modal;