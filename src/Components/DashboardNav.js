import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
export default function DashboardNav(){
    useEffect(() => {
        document.title = 'Dashboard | McPayDay'
    }, [])
    const [isMenuOpen, setMenuOpen] = useState(false)
    return(
        <>
            <motion.span
                className="toggle-menu flex-row"
                onClick={() => setMenuOpen((!isMenuOpen))}
                initial={{
                    x: 0
                }}
                animate={{
                    x: isMenuOpen ? -200 : 30
                }}
            >
                {isMenuOpen
                    ?(
                    <i className="far fa-times"></i>
                    )
                    :(
                    <i className="far fa-bars"></i>
                    )
                }
            </motion.span>
            <motion.div
                initial={{
                    x: 300
                }}
                animate={{
                    x: isMenuOpen ? 0 : 300
                }}
                className="dashboard-nav flex-column"
            >
                <div className="nav-items flex-column">
                    <Link to="/dashboard" className="nav-item rubik">
                        Profile
                    </Link>
                    <Link to="/dashboard/transactions" className="nav-item rubik">
                        View all Transactions
                    </Link>
                    <Link to="/dashboard" className="nav-item rubik">
                        Feedback
                    </Link>
                    <Link to="/dashboard" className="nav-item rubik">
                        FAQ.
                    </Link>
                </div>
                <div className="flex-row logout-container">
                    <button className="bg-lighter text-white jost logout-btn">
                        Logout
                    </button>
                </div>

            </motion.div>
        </>
    )
}