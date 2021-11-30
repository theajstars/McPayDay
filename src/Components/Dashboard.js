import React from 'react'
import DashboardNav from "./DashboardNav";

export default function Dashboard(){
    return(
        <>
            <DashboardNav />
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
                    <button className="dashboard-btn jost">
                        Add Money
                    </button>
                </div>
                <div className="dashboard-new">
                    <button className="dashboard-btn jost">
                        New Purchase
                    </button>
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