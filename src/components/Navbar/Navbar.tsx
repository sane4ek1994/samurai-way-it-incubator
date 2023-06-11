import React from 'react';
import {S} from './Navbar_styles'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';

export class Navbar extends React.Component {
    render() {
        return (
            <S.Nav>
                <S.Menu>

                    <S.MenuItem>
                        <S.Link activeClassName='active' to='/profile'>
                            <S.IconWrapper><AccountCircleOutlinedIcon fontSize='small'/></S.IconWrapper> Profile</S.Link>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.Link activeClassName='active' to='/messages'>
                            <S.IconWrapper><ChatBubbleOutlineOutlinedIcon fontSize='small'/></S.IconWrapper>Messages</S.Link>
                    </S.MenuItem>
                    <S.MenuItem><S.Link activeClassName='active' to='/music'>
                        <S.IconWrapper><QueueMusicOutlinedIcon fontSize='small'/></S.IconWrapper>Music</S.Link>
                    </S.MenuItem>
                    <S.MenuItem><S.Link activeClassName='active' to='/settings'>
                        <S.IconWrapper><SettingsOutlinedIcon fontSize='small'/></S.IconWrapper>Settings</S.Link>
                    </S.MenuItem>
                </S.Menu>
            </S.Nav>
        );
    }
}



