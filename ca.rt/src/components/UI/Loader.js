import ReactDOM from "react-dom";

export const Backdrop = props => {
    const handleClick = () =>{
        if(props.onClose)
        {
            props.onClose();
        }
    }
    return (
        <div onClick={handleClick} className="loader-overlay" ></div >
    )
}


const Loader = () => {

    return (
        ReactDOM.createPortal(
            <>
                <Backdrop></Backdrop>
                <div className="loader-overlay"></div>
                <div className="loading-dots">
                    <div>loading...</div>
                    <div className="loading-dots--dots"></div>
                </div>
            </>
            ,
            document.getElementById("loader-root")
        )
    )
}

export default Loader