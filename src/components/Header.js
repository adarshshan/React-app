import React from "react";
import './Header.css';

class Header extends React.Component {
    render() {
        let props = this.props;
        const { onMenuSelect } = props;
        return (
            <div>
                <div className="app-header">
                    <span className="header-title">Code malayalam</span>
                    <span onClick={() => onMenuSelect('home')}>Home</span>
                    <span onClick={() => onMenuSelect('usage')}>Usage</span>
                    <span onClick={() => onMenuSelect('settings')}>settings</span>
                    <span onClick={() => onMenuSelect('logout')}>logout</span>
                </div>
                <button style={{ backgroundColor: 'green', color: 'white' }}>Refresh</button>
            </div>
        )
    }
}

export default Header;