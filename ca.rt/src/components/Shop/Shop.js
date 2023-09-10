import { Fragment } from "react";
import SideBar from "./SideBar";
import ShopProduct from "./ShopProduct";
import ShopCategory from "./ShopCategory";

function Shop(ProductKey, CategoryKey) {

    const YourOrders = null;
    const Prouduct = ProductKey;
    const Category = CategoryKey;
    const OrdersHistory = null;
    const ManageProfile = null;
    const ManageSHOP = null;
  
    return (
        <Fragment>
            <div style={{display:"flex"}}>
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
            </div>
        </Fragment>
    )
}
export default Shop;