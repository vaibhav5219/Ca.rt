import "../../styles/Header.scss"
import AddToCartIcon from "../../assets/icons/cart.png"
import Cart from "../Cart";

const Header = ({count, items}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid navigationbar">
                    <a  className="navbar-brand" href="/">Shop My Cart</a>
                    
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <form className="d-flex" role="search">
                            <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <Cart count={count} AddToCartIcon={AddToCartIcon} items={items}></Cart>
                </div>
            </nav>
        </div>
    );
}

export default Header;