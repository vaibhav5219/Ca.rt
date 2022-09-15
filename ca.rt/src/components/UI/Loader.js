import ReactDOM from "react-dom";

const Loader = () => {
    // return (<>
    //     <div className="loader-overlay"></div>
    //     <div className="loading-dots">
    //         <div>loading...</div>
    //         <div className="loading-dots--dots"></div>
    //     </div>
    // </>
    // )

    return (
        ReactDOM.createPortal(
            <>
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