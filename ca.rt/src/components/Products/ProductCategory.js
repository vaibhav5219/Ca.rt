import { useNavigate, useLocation, withRouter, useParams  } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductCategory = () => {
    const params1 = useParams();

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
            <Link to={"/products"} activeClassName="active">Product  Item 3 via NavLink </Link>
            
        </>
    )
}

export default ProductCategory