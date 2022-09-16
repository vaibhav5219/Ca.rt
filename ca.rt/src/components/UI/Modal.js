import { Fragment } from "react";
import { Backdrop } from "./Loader";
import  ReactDOM  from "react-dom";

const Modal = ({onClose}) =>{
    return (
        <Fragment>
            {
                ReactDOM.createPortal(
                    <Fragment>
                         <Backdrop onClick={onClose}></Backdrop> 
                        <div className="modal">
                            Modal Content!
                            <button className="closeModal" onClick={onClose}>X</button>
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