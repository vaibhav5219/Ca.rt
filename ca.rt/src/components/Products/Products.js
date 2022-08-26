import ListItem from "../ListItems/ListItem";

const items = [
    {
        id: 0,
        discountedPrice: 340,
        price: 450,
        title: "Title of the item",
        thumbnail: "cart.png"
    },
    {
        id: 1,
        discountedPrice: 340,
        price: 450,
        title: "Title of the item",
        thumbnail: "cart.png"
    }
]

const Products = () => {
    return (
        <div>
            <div className="d-flex flex-column"></div>
            <div className={"product-list d-flex flex-column "}>
                <div className={"product-list-wrapper  d-flex justify-content-center"}>
                    <ListItem data={items[0]}></ListItem>
                    <ListItem data={items[1]}></ListItem>
                    <ListItem data={items[0]}></ListItem>
                    <ListItem data={items[1]}></ListItem>
                    <ListItem data={items[0]}></ListItem>
                    <ListItem data={items[1]}></ListItem>
                    <ListItem data={items[0]}></ListItem>
                    <ListItem data={items[1]}></ListItem>
                </div>
            </div >
            <div className="d-flex flex-column"></div>
        </div>
    );
}

export default Products;