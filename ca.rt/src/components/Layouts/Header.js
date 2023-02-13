import "../../styles/Header.scss"
import AddToCartIcon from "../../assets/icons/cart.png"
import Cart from "../Cart";
import SearchBox from "../UI/Search";

const Header = ({count, items, onHandleEvent}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid navigationbar">
                    <a  className="navbar-brand" href="/">Shop My Cart</a>
                    
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <SearchBox></SearchBox>
                    </div>
                    <Cart count={count} AddToCartIcon={AddToCartIcon} items={items} onHandleEvent={onHandleEvent}></Cart>
                </div>
            </nav>
        </div>
    );
}

export default Header;