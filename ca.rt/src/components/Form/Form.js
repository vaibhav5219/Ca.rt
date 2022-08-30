const Form = (props) => {

    const handleInput = e =>{
        props.onChangeInput(e);
    }

    return (
        <form onSubmit={props.onFormSubmission}>
            <h2>Item card Details</h2>
            <div className={"input-field row"}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={props.item.title} placeholder="Enter Title" onChange={handleInput} required />
            </div>
            <div className={"input-field row"}>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" value={props.item.price} placeholder="Enter Price" onChange={handleInput} required />
            </div>
            <div className={"input-field row"}>
                <label htmlFor="discountPrice">Discounted Price</label>
                <input type="number" name="discountedPrice" value={props.item.discountedPrice} placeholder="Enter Discounted Price" onChange={handleInput} required />
            </div>
            <div className={"input-field row"}>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input type="text" name="thumbnail" value={props.item.thumbnail} placeholder="Enter Thumbnail Name" onChange={handleInput} required />
            </div>
            <div className={"input-field "}>
                <button className="btn btn-info">Update</button>
            </div>
        </form>
    )
}

export default Form;