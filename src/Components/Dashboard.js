import React, { useState, useEffect } from 'react'
import DashboardNav from "./DashboardNav";
import {PaystackButton} from "react-paystack";
import { useToasts } from 'react-toast-notifications'
import axios from "axios";
import {Link} from "react-router-dom";

export default function Dashboard(){
    const { addToast, removeAllToasts } = useToasts()
    const [isOverlayShown, setOverlayShown] = useState(false)
    const [amount, setAmount] = useState("")
    const [API_KEY, setAPI_KEY] = useState("pk_live_312d97a8b92f9ecf203770f3fd3f9a6d4bedad2a")

    function checkIsNumber(e, setter) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setter(e.target.value);
        }
    }
    useEffect(() => {
        //Fetch API key on component Mount

    }, [])
    // Add money
    const AddMoney = () => {
        setOverlayShown(true)
    }
    const addMoneySuccess = (paymentObject) => {
        console.log(paymentObject)
        //If payment is successful send to DB
    }
    const addMoneyClose = (error) => {
        //Payment has failed
        setOverlayShown(false)
        addToast('Payment failed!', {
            appearance: 'error',
            autoDismiss: false
        })
    }
    return(
        <>
            <DashboardNav />
            <div className={`${isOverlayShown ? "bg-overlay" : 'none'}`}></div>
            {
                isOverlayShown && (
                    // If overlay is shown then display Paystack modal
                    <>
                        <div className="add-money-dialog flex-column bg-white">
                            <div className="flex-row add-money-top">

                            <span className="add-money-head rubik text-darker">
                                Add Money
                            </span>
                            <span className="close-add-money flex-column text-darker"
                                onClick={() => setOverlayShown(false)}
                            >
                                <i className="far fa-times"></i>
                            </span>
                            </div>
                            <input type="text" className="auth-input jost"
                                   spellCheck="false"
                                   placeholder="Amount (₦)"
                                   value={amount}
                                   onChange={(e) => checkIsNumber(e, setAmount)}

                            />
                            <PaystackButton className="bg-darker auth-btn text-white jost" amount={amount * 100} email={'atajiboyeo@gmail.com'} publicKey={"pk_live_312d97a8b92f9ecf203770f3fd3f9a6d4bedad2a"}
                                onSuccess={addMoneySuccess}
                                onClose={addMoneyClose}
                            >
                                Proceed
                            </PaystackButton>
                        </div>
                    </>
                )
            }
            <div className="dashboard-container flex-column">
                <div className="dashboard-top flex-row">
                    <span className="flex-column">
                        <span className="wallet-tag">
                            Wallet balance
                        </span>
                        <span className="wallet-amount">
                            ₦7,550
                        </span>
                    </span>
                    <button className="dashboard-btn jost"
                        onClick={() => AddMoney()}
                    >
                        Add Money
                    </button>
                </div>
                <div className="dashboard-new">
                    <Link to='/dashboard/purchase' className="dashboard-btn jost">
                        New Purchase
                    </Link>
                </div>
                <div className="recent-activity">
                    <span className="text-darker jost recent-head">
                        Recent Activity
                    </span>
                    <div className="recent-trans flex-column">
                        <div className="recent-transaction credit-trans flex-row">
                            <span className="flex-column recent-transaction-left">
                                <span className="rubik text-white">
                                    Add money
                                </span>
                                <span className="recent-transaction-date">
                                    Sunday, December 21 2021
                                </span>
                            </span>
                            <span className="recent-transaction-amount text-white roboto">
                                +7,550
                            </span>
                        </div>
                        <div className="recent-transaction debit-trans flex-row">
                            <span className="flex-column recent-transaction-left">
                                <span className="rubik text-white">
                                    Lorem ipsum debitors
                                </span>
                                <span className="recent-transaction-date">
                                    Sunday, December 28 2021
                                </span>
                            </span>
                            <span className="recent-transaction-amount text-white roboto">
                                -580
                            </span>
                        </div>
                        <div className="recent-transaction credit-trans flex-row">
                            <span className="flex-column recent-transaction-left">
                                <span className="rubik text-white">
                                    Add money
                                </span>
                                <span className="recent-transaction-date">
                                    Sunday, December 21 2021
                                </span>
                            </span>
                            <span className="recent-transaction-amount text-white roboto">
                                +7,550
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}