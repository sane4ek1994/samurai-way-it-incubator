import React from 'react';
import {S} from './Navbar_styles'

export class Navbar extends React.Component {
    render() {
        return (
            <S.Nav>
                <S.Menu>
                    <S.MenuItem>Profile</S.MenuItem>
                    <S.MenuItem>Message</S.MenuItem>
                    <S.MenuItem>Music</S.MenuItem>
                    <S.MenuItem>Setting</S.MenuItem>
                </S.Menu>
            </S.Nav>
        );
    }
}



