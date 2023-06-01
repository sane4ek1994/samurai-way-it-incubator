import React from 'react';

export class Navbar extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>Profile</li>
                    <li>Message</li>
                    <li>Music</li>
                    <li>Setting</li>
                </ul>
            </nav>
        );
    }
}

