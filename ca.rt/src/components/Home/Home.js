import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <Fragment>
            <h1>Default Message</h1>
            {/* <a href='/products'>Product</a> */}
            <Link to={"/products"}>Product via Link </Link>
        </Fragment>
    )
}

export default Home;