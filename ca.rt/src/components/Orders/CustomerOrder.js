import axios from "axios";
// npm i mdb-react-ui-kit
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import store from '../../Store/index';
import { useDispatch, useSelector } from "react-redux";
import { SetCustomerOrders_Dispatch } from "../../actions/CustometOrdersAction";


export default function CustomerOrder() {
    const history = useNavigate();
    const [Orders, SetOrders] = useState()
    const state = store.getState()
    const dispatch = useDispatch();
    const CartIcon = "/assets";
    let ProgressBarWidth = 0;

    useEffect(() => {

        dispatch(SetCustomerOrders_Dispatch(data => {
            if (data?.error == true) {
                alert("set customer order error ")
            }
            else {
                console.log('data.status => ', data)
            }
        }))

    }, []);


    const customerOrders = useSelector(state => state.CustomerOrdersState)
    console.log("customerOrderState after useeffect 1-->> ", customerOrders)
    console.log("customerOrderState after useeffect 2-->> ", customerOrders.orders)

    return (
        <>
            <section
                className="h-100 gradient-custom"
                style={{ backgroundColor: "#eee" }}
            >
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="10" xl="12">
                            <MDBCard style={{ borderRadius: "10px" }}>
                                <MDBCardHeader className="px-5 py-1">
                                    {/* <MDBTypography tag="h5" className="text-muted mb-0">
                                        Thanks for your Order,{" "}
                                        <span style={{ color: "#a8729a" }}>
                                            {
                                                state.Customer?.IsACustomer ? state.Customer?.CustomerName : " "
                                            }</span>!
                                    </MDBTypography> */}

                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Delivery Addres</p>
                                        {/* <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Total</span> $898.00
                                        </p> */}
                                    </div>

                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0">Customer Name</p>
                                        {/* <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Discount</span> $19.00
                                        </p> */}
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">
                                            Address
                                        </p>
                                        {/* <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">GST 18%</span> 123
                                        </p> */}
                                    </div>

                                    <div className="d-flex justify-content-between mb-5">
                                        <p className="text-muted mb-0">
                                            Contact Number
                                        </p>
                                        {/* <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Delivery Charges</span>{" "}
                                            Free
                                        </p> */}
                                    </div>

                                </MDBCardHeader>
                                <MDBCardBody className="p-4">


                                    {
                                        customerOrders?.orders?.map(order => {

                                            order.isOrderConfimed == "true" ? ProgressBarWidth = 25 : ProgressBarWidth = 0
                                            order.isShipped == "true" ? ProgressBarWidth = 50 : ProgressBarWidth = 0
                                            order.isOutForDelivery == "true" ? ProgressBarWidth = 75 : ProgressBarWidth = 0
                                            order.isDelivered == "true" ? ProgressBarWidth = 100 : ProgressBarWidth = 0


                                            return (
                                                < MDBCard key={order.orderNumber} className="shadow-0 border mb-4" >
                                                    <MDBCardBody>
                                                        <MDBRow>
                                                            <MDBCol md="2">
                                                                <MDBCardImage
                                                                    // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                                                                    src={`${CartIcon}/${order.imagePath}`}
                                                                    fluid
                                                                    alt="Cart"
                                                                />
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0">{order.productName}</p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0">{order.orderNumber}</p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0 small">{order.orderDate}</p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0 small">
                                                                    {order.shopCode}
                                                                </p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0 small">Qnt : {order.orderQuantity}</p>
                                                            </MDBCol>
                                                            <MDBCol
                                                                md="2"
                                                                className="text-center d-flex justify-content-center align-items-center"
                                                            >
                                                                <p className="text-muted mb-0 ">₹ {order.orderQuantity * order.unitPrice}</p>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <hr
                                                            className="mb-4"
                                                            style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                        />

                                                        {/* Track Order */}

                                                        <MDBRow className="align-items-center">
                                                            <MDBCol md="2">
                                                                <p className="text-muted mb-0 small">Track Order</p>
                                                            </MDBCol>
                                                            <MDBCol md="10">
                                                                <MDBProgress
                                                                    style={{ height: "6px", borderRadius: "16px" }}
                                                                >

                                                                    <MDBProgressBar
                                                                        style={{
                                                                            borderRadius: "16px",
                                                                            backgroundColor: "#a8729a",
                                                                        }}
                                                                        width={ProgressBarWidth}
                                                                        valuemin={0}
                                                                        valuemax={100}
                                                                    />
                                                                </MDBProgress>
                                                                <div className="d-flex justify-content-around mb-1">
                                                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                        Order Confirmed
                                                                    </p>
                                                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                        Order Shipped
                                                                    </p>
                                                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                        Out for delivary
                                                                    </p>
                                                                    <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                        Delivered
                                                                    </p>
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            )
                                        })
                                    }



                                    {/* */}
                                </MDBCardBody>
                                {/* <MDBCardFooter
                                    className="border-0 px-4 py-5"
                                    style={{
                                        backgroundColor: "#a8729a",
                                        borderBottomLeftRadius: "10px",
                                        borderBottomRightRadius: "10px",
                                    }}
                                >
                                    <MDBTypography
                                        tag="h5"
                                        className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                                    >
                                        Total paid: <span className="h2 mb-0 ms-2">$1040</span>
                                    </MDBTypography>
                                </MDBCardFooter> */}
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer >
            </section >
        </>
    );
}