const Loader = () => {
    return (<>
        <div className="loader-overlay"></div>
        <div className="loading-dots">
            <div>loading...</div>
            <div className="loading-dots--dots"></div>
        </div>
    </>
    )
}

export default Loader