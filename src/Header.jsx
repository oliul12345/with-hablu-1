import React from 'react';

const Header = () => {
    return (
        <div className='header'>
             <div className='header-ul'>
                <img className='img' src="https://i.imgur.com/yXOvdOSs.jpg'" alt="" />
                <h1>MD:OLIUL ISLAM</h1>
            </div>
            <div>
                <ul className='header-ul'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Log In</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;