import { Fragment } from "react";
import SideBar from "./SideBar";
import ShopProduct from "./ShopProduct";
import ShopCategory from "./ShopCategory";

function Shop() {

    const YourOrders = null;
    const Prouduct = null;
    const Category = 1;
    const OrdersHistory = null;
    const ManageProfile = null;
    const ManageSHOP = null;
  
    return (
        <Fragment>
                <SideBar />
                {
                    Category &&
                    <ShopCategory />
                }
                {
                    YourOrders &&
                    <ShopProduct />
                }
                {
                    Prouduct && 
                    <ShopProduct />
                }
                {
                    OrdersHistory &&
                    <ShopCategory />
                }
                {
                    ManageProfile &&
                    <ShopProduct />
                }
                {
                    ManageSHOP &&
                    <ShopCategory />
                }
        </Fragment>
    )
}
export default Shop;