import React, { useState, useEffect } from "react";

export default function Purchase(){
    return (
        <>
            <div className="purchase-container flex-column bg-white">
                <span className="caterer-head text-darker jost">
                    Lorem ipsum castes
                </span>
                <center>
                    <small className='raleway text-darker' style={{
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
                        />
                        <button className="logout-btn bg-lighter text-white jost">
                            Pay now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}