import { useNavigate, useLocation, withRouter, useParams, generatePath  } from "react-router-dom";
import { Link, NavLink, useMatch } from "react-router-dom";

const ProductCategory = () => {
    const params1 = useParams();
    const {url, pathname} = useMatch();

    // console.log("route match = ", routeMatch)

    const handleRedirection = () => {
        
        //history(-1);
        //history(2); 
    }

    console.log(params1);

    return (
        <>
            <h1>Product Category "Something"</h1>
            <Link to={"/product/1"}>Product Category 1 via Link</Link><br></br>
            <Link to={"/products"}>Product  Category 2 via Link </Link><br></br>
            <NavLink to={generatePath(`${url}/:category/:subcategory?`,{category:"category", subcategory:"subcategory"})} activeClassName="active">Product  Item 3 via NavLink </NavLink>
            
        </>
    )
}

export default ProductCategory