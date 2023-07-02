import "../../styles/Header.scss"
import AddToCartIcon from "../../assets/icons/cart.png"
import Cart from "../Cart";
import SearchBox from "../UI/Search";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";

const Header = ({count, items, onHandleEvent}) => {
    const history = useNavigate();
    const dispatch = useDispatch()

    const authState = useSelector(state => state.auth)

    const logoutHandler = () => {
        dispatch(logout())
    }

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
                            <div>
                                <button className="btn btn-outline-danger">User Profile</button>
                                <button onClick={logoutHandler} title="Logout" className="login-btn">Logout</button>
                            </div>
                            :
                            <button className="btn btn-outline-danger" onClick={() => history("/login")}>Login In</button>
                        }
                    </div>
                    <Cart count={count} AddToCartIcon={AddToCartIcon} items={items} onHandleEvent={onHandleEvent}></Cart>
                </div>
            </nav>
        </div>
    );
}

export default Header;