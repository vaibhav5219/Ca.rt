import { useNavigate, useLocation, withRouter  } from "react-router-dom";
import {Navigate} from "react-router"; // not working

const ProductItem = () => {
    const history = useNavigate();
    const location = useLocation();


    const handleRedirection = () => {
        console.log(location);
        //history(-1);
        //history(2);
        
    }

    return (
        <>
        <h1>Product Item Component</h1>
        <button onClick={handleRedirection}>Go back to Product page</button>
        </>
    )
}

export default ProductItem