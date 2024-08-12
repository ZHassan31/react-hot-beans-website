import React from 'react';
import ReactDOM from 'react-dom';
import CardFlex from './CardFlex.jsx';
import NavBar from './NavBar.jsx';

const year = new Date().getFullYear();

function ProfilePage() {
    return (
        <div>
            <div>
                <p>Hot Beans {year} </p>
            </div>
            <NavBar />
            <h1>hello world</h1>
            <NavBar />
        </div>

    );
}

export default ProfilePage;
