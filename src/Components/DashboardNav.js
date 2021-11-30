import React, { useState } from 'react'
import {Link} from "react-router-dom";
export default function DashboardNav(){
    const [isMenuOpen, setMenuOpen] = useState(false)
    return(
        <>
            <span className="toggle-menu">
                {isMenuOpen && (
                    <i className="far fa-bars"></i>
                )}
            </span>
            <div className="dashboard-nav flex-column">
                <Link to="/dashboard" className="nav-item rubik">
                    Profile
                </Link>
                <Link to="/dashboard" className="nav-item rubik">
                    View all Transactions
                </Link>
                <Link to="/dashboard" className="nav-item rubik">
                    Feedback
                </Link>
                <Link to="/dashboard" className="nav-item rubik">
                    FAQ.
                </Link>
            </div>
        </>
    )
}