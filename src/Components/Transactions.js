import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DashboardNav from "./DashboardNav";
import {Container} from "@mui/material";
export default function Transactions(){

    const [dateValue, setDateValue] = useState(new Date())
    const [transactionType, setTransactionType] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const handleDateChange = date => {
        console.log(date)
        setDateValue(date)
    }
    useEffect(() => {
        console.log(transactionType)
    }, [transactionType])
    return(
        <>
            <DashboardNav />
            <div className="flex-column transaction-container">
                <div className="flex-row date-row">
                    <span className="jost bg-darker text-white flex-row">Date</span>
                    <DatePicker selected={dateValue} onChange={handleDateChange}/>
                </div>
                <div className="flex-row filters-row">
                    <span className="jost text-darker">
                        All
                    </span>
                    <input type="radio" className='filter-radio' name='transaction_type'
                        checked={transactionType === 0 ? true : false}
                        value={transactionType === 0 ? true : false}
                        onClick={() => setTransactionType(0)}
                    />


                    <span className="jost text-darker">
                        Credit
                    </span>
                    <input type="radio" className='filter-radio' name='transaction_type'
                       value={transactionType === 1 ? true : false}
                       checked={transactionType === 1 ? true : false}
                       onClick={() => setTransactionType(1)}

                    />

                    <span className="jost text-darker">
                        Debit
                    </span>
                    <input type="radio" className='filter-radio' name='transaction_type'
                        value={transactionType === 2 ? true : false}
                        checked={transactionType === 2 ? true : false}
                        onClick={() => setTransactionType(2)}
                    />

                </div>
                <div className="all-trans flex-column">
                    <div className="recent-transaction credit-trans flex-row">
                            <span className="flex-column recent-transaction-left">
                                <span className="rubik text-darker">
                                    Add money
                                </span>
                                <span className="recent-transaction-date">
                                    Sunday, December 21 2021
                                </span>
                            </span>
                        <span className="recent-transaction-amount roboto">
                                +7,550
                            </span>
                    </div>
                    <div className="recent-transaction debit-trans flex-row">
                            <span className="flex-column recent-transaction-left">
                                <span className="rubik text-darker">
                                    Lorem ipsum debtors
                                </span>
                                <span className="recent-transaction-date">
                                    Sunday, December 28 2021
                                </span>
                            </span>
                        <span className="recent-transaction-amount roboto">
                                -580
                            </span>
                    </div>

                </div>
            </div>
            <div className="pag-container">
                {/*<Pagination*/}
                {/*    variant="outlined"*/}
                {/*    shape="rounded"*/}
                {/*    count={20}*/}
                {/*    onChange={(e, value) => {*/}
                {/*        setPageNumber(value);*/}
                {/*    }}*/}
                {/*/>*/}
            </div>
        </>
    )
}