import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DashboardNav from "./DashboardNav";
import { Pagination } from '@mui/material'
import axios from "axios";
export default function Transactions(){

    const [dateValue, setDateValue] = useState(new Date())
    const [transactionType, setTransactionType] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const [transactions, setTransactions] = useState(new Array(15))
    const [renderedTransactions, setRenderedTransactions] = useState([])
    const handleDateChange = date => {
        console.log(date)
        setDateValue(date)
    }
    const paginationChange = (e, value) => {
        console.clear()
        console.log(value)
        const currentRender = transactions.slice(value * 10, value * 10 + 10)
        setRenderedTransactions(currentRender)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                setTransactions(res.data.concat(res.data).concat(res.data))
            })
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
                    {
                        renderedTransactions.map((transaction) => {
                            const index = transactions.indexOf(transaction)
                            console.log(transaction)
                            return (
                                <div className={`recent-transaction ${index % 2 === 0 ? "credit-trans" : "debit-trans"} flex-row`}>
                                    <span className="flex-column recent-transaction-left">
                                        <span className="rubik text-darker">
                                            Add money {index}
                                        </span>
                                        <span className="recent-transaction-date">
                                            Sunday, December 21 2021
                                        </span>
                                    </span>
                                    <span className="recent-transaction-amount roboto">
                                        +7,550
                                     </span>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
            <div className="pag-container">
                <Pagination count={10} variant="outlined" color="primary"
                    siblingCount={0}
                            onChange={paginationChange}
                />

            </div>
        </>
    )
}