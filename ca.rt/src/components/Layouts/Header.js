import "../../styles/Header.scss"
import AddToCartIcon from "../../assets/icons/cart.png"
import Cart from "../Cart";
import SearchBox from "../UI/Search";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({count, items, onHandleEvent}) => {
    const history = useNavigate();

    const authState = useSelector(state => state.auth)

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid navigationbar">
                    <a  className="navbar-brand" href="/">Shop My Cart</a>
                    
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <SearchBox></SearchBox>
                        
                    </div>
                    <div className="login_button">
                        {
                            authState && authState.idToken ? 
                            <button className="login-btn">User Profile</button>
                            :
                            <button className="login-btn" onClick={() => history("/login")}>Login In</button>
                        }
                    </div>
                    <Cart count={count} AddToCartIcon={AddToCartIcon} items={items} onHandleEvent={onHandleEvent}></Cart>
                </div>
            </nav>
        </div>
    );
}

export default Header;