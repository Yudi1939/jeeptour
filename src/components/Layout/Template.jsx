import { Link } from "react-router-dom";
import React from "react";
import { parse } from "uuid";

const Template = (props) => {
    let session = localStorage.getItem('user');
    let sessionUsername = '';

    if (session) {
        try {
            session = JSON.parse(session);
            sessionUsername = session.username || '';
        } catch (e) {
            console.error("Error parsing session data", e);
        }
    }

    const { children, linkDashboard } = props;

    return (
        <>
            <div className="navigation h-3/10">
                <nav className="bg-green-500 w-full flex flex-wrap p-3">
                    <h1 className="text-3xl text-white font-bold justify-start items-start flex w-1/2">JeepTour</h1>
                    <div className="flex justify-end items-center w-1/2">
                        <Link to={linkDashboard} className="text-white text-xl font-semibold hover:bg-green-700">Dashboard</Link>
                        <p className="text-white text-xl ml-5 font-semibold hover:bg-green-700">{sessionUsername}</p>
                        <Link 
                            to="/login" 
                            onClick={() => localStorage.clear()} 
                            className="text-white text-xl ml-5 bg-green-800 rounded px-2 py-1 font-semibold hover:bg-green-700"
                        >
                            Logout
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="content w-8/10">{children}</div>
        </>
    );
}

export default Template;