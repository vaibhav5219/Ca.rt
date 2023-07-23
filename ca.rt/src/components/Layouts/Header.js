import "../../styles/Header.scss"
import AddToCartIcon from "../../assets/icons/cart.png"
import Cart from "../Cart";
import SearchBox from "../UI/Search";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
import store from '../../Store/index'

const Header = ({count, items, onHandleEvent}) => {
    const history = useNavigate();
    const dispatch = useDispatch()
    const state = store.getState()
    console.log('State in Header --->>> ', state)
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
                    <Cart count={count} AddToCartIcon={AddToCartIcon} items={items} onHandleEvent={onHandleEvent}></Cart>
                    <div className="login_button">
                        {
                            authState && authState.token ? 
                            <div>
                                <button className="btn btn-outline-danger">
                                    {
                                        state.Customer?.IsACustomer ?  state.Customer?.CustomerName : state.Shop?.ShopName 
                                    }
                                </button>
                                <button onClick={logoutHandler} title="Logout" className="btn btn-outline-danger">Logout</button>
                            </div>
                            :
                            <button className="btn btn-outline-danger" onClick={() => history("/login")}>Login In</button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;