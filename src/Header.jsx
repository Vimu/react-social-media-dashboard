import React, { useState } from "react";

const Header = ({isDarkMode, onToggle}) => {

    return (  
        <header className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div className="header-sec">
                <div className="header__title">
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                </div>
                <hr />
                <div className="header__switcher">
                    <p>Dark Mode</p>
                    <label className="switch">
                    <input type="checkbox" onChange={onToggle} checked={isDarkMode} defaultChecked/>
                    <span className="slider"></span>
                    </label>
                </div>
            </div>
        </header>
    );
}
 
export default Header;