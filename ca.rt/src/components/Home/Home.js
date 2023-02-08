import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () =>{

    const handleRedirection = () => {

    }

    return (
        <Fragment>
            <h1>Default Message</h1>
            {/* <a href='/products'>Product</a> */}
            <ul>
                <li><Link to={"/products"}>Product via Link </Link></li>
                <li><Link to={"/products?search=something"}>Product via Link </Link></li>
                <li><Link to={{
                    Pathname: '/products',
                    search: 'search=mobile'
                }}>Product via Mobile </Link>
                </li>
                <li><NavLink to={{
                    Pathname: '/products',
                    search: 'search=usingnavLink'
                }}>Product with Query String </NavLink>
                </li>
                <li>
                    <button onClick={handleRedirection}>Product Redirection using Button</button>
                </li>
            </ul>
            
        </Fragment>
    )
}

export default Home;