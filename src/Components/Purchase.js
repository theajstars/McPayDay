import React, { useState, useEffect } from "react";
import DashboardNav from "./DashboardNav";
import {checkIsNumber} from "./Auth/Register";

export default function Purchase(){
    const [amount, setAmount] = useState("")
    const [tryPayment, setTryPayment] = useState(false)
    const [isPayButtonDisabled, setPayButtonDisabled] = useState(false)
    const attemptToPay = () => {
        setTryPayment(true)
        setPayButtonDisabled(true)
    }
    return (
        <>
            <DashboardNav />
            <div className="purchase-container flex-column bg-white">
                <span className="caterer-head text-darker jost">
                    Lorem ipsum castes
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
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Sigma chad
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Sigma chad
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Alpha charlie one
                    </div>
                    <div className="food-grid-item jost flex-row">
                        Sigma chad
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