import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "/",
            name: "About",

        },
        {
            path: "/team",
            name: "Team",

        },
        {
            path: "/channel",
            name: "Channel",

        },
    ]
    return (
        <div className="container">
            <div className='sidebar'>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <p>{item.name}</p>
                        </NavLink>
                    ))
                }
            </div>
            <div className='content'>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Sidebar