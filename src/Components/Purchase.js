import React, { useState, useEffect } from "react";
import DashboardNav from "./DashboardNav";
import {checkIsNumber} from "./Auth/Register";
import { useToasts } from 'react-toast-notifications'

export default function Purchase(){
    const { removeAllToasts, addToast } = useToasts()
    const [amount, setAmount] = useState("")
    const [tryPayment, setTryPayment] = useState(false)
    const [isPayButtonDisabled, setPayButtonDisabled] = useState(false)
    const [isBgOverlay, setBgOverlay] = useState(false)
    const attemptToPay = () => {
        console.log(amount)
        if(amount.length < 2){
            //Amount is not up to 10
            removeAllToasts()
            addToast("Amount must be up to ₦10", {
                appearance: "warning",
                autoDismiss: true
            })
        }else{
            setTryPayment(true)
            setPayButtonDisabled(true)
            setBgOverlay(true)
        }
    }
    const confirmPinForPuchase = () => {

    }
    return (
        <>
            {
                isBgOverlay && (
                    <>
                    <div className="bg-overlay"></div>
                        <div className="add-money-dialog flex-column bg-white confirm-purchase-dialog">
                            <div className="flex-row add-money-top">
                                <span className="add-money-head rubik text-darker">
                                    Confirm purchase
                                </span>
                                <span className="close-add-money flex-column text-darker"
                                      onClick={() => {
                                          setBgOverlay(false)
                                          setTryPayment(false)
                                          setPayButtonDisabled(false)
                                      }}
                                >
                                <i className="far fa-times"></i>
                            </span>
                            </div>
                            <p className="text-darker jost">
                                Confirm payment of <b>₦{amount}</b>
                            </p>
                            <button className="auth-btn jost text-white bg-darker"
                                onClick={confirmPinForPuchase}
                            >
                                Confirm
                            </button>
                        </div>
                    </>
                )
            }
            <DashboardNav />
            <div className="purchase-container flex-column bg-white">
                <span className="caterer-head text-darker jost">
                    Caterer Name goes here
                </span>
                <center>
                    <small className="rubik text-darker" style={{
                        padding: '12px'
                    }}>
                        Available Items
                    </small>
                </center>
                <div className="food-items">
                    <div className="food-grid-item jost flex-row">
                        White Rice
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Bread
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Beans
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Jollof Rice
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Fried Rice
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Moi-Moi
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Boiled Egg
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Fried Egg
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Chicken
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Fish
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Indomie
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Spaghetti
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Swallow
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Shawarma
                    </div>
                    <div className="food-grid-item jost flex-row">
                        *Some Food Name*
                    </div>
                    <div className="food-grid-item jost flex-row">
                        *Some Food Name*
                    </div>
                </div>
                
                <div className="purchase-section flex-column">
                    <textarea className='jost auth-input purchase-narration'
                        placeholder='Narration (optional)'
                        spellCheck='false'
                    ></textarea>
                    <div className="flex-row purchase-row">
                        <input type="text" className="auth-input jost"
                            placeholder='Amount (₦)'
                            spellCheck='false'
                            value={amount}
                            onChange={(e) => checkIsNumber(e, setAmount)}

                        />
                        <button className="logout-btn bg-lighter text-white jost"
                            disabled={isPayButtonDisabled}
                            onClick={attemptToPay}
                        >
                            Pay now{tryPayment && (<> <i className="far fa-spinner-third fa-spin"></i></>)}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}