import "../../styles/SubHeader.scss"
import { NavLink } from "react-router-dom";

const SubHeader = () => {
    return (
        <div className="d-flex bd-highlight mb-3">
            <div className="p-2 bd-highlight"><NavLink  to="/category-1" >Children Category</NavLink> </div>
            <div className="p-2 bd-highlight"><NavLink  to="/category-2" >Men Category</NavLink> </div>
            <div className="p-2 bd-highlight"><NavLink  to="/category-3" >Women Category</NavLink> </div>
            <div className="p-2 bd-highlight"><NavLink  to="/category-4" >Offer Zone</NavLink></div>
        </div>
    );
}

export default SubHeader;