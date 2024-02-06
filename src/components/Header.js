import React from "react";
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="app-header">
                <span className="header-title">Code malayalam</span>
                <span>Home</span>
                <span>Usage</span>
                <span>settings</span>
                <span>logout</span>
            </div>
        )
    }
}

export default Header;