import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const ShopState = useSelector(state => state.Shop)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#0dcaf0">  {/* #333 */}
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/Shop/ShopHome" className="text-decoration-none" style={{ color: 'inherit' }}>
          {ShopState.ShopCode}.SH.OP 
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Shop/ShopHome" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Your Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Shop/ShopHome/ShopProduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Prouduct</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Shop/ShopHome/ShopCategory" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Category</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Shop/ShopHome/OrderHistory" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Orders History</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/Shop/ShopHome/ManageProfile" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Manage Profile</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="ManageShop" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Manage SH.OP</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Make Your SH.OP Ready
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

// npm install --save cdbreact => For this sidebar
