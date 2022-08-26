import "../../styles/Header.scss"
import AddToCartIcon from "../../assets/icons/cart.png"

const num=0;

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <a  className="navbar-brand" href="/">Shop My Cart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <form className="d-flex" role="search">
                            <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div>
                        <div className="text-white">
                            <img src={AddToCartIcon} alt="Cart Icon" width={"20"} height={"20"}></img>
                            <i data-count={num} className="fas fa-shopping-cart  icon-grey badge"><strong>Cart</strong></i> 
                        </div> 
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;