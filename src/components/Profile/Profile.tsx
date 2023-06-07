import React from 'react';
import {S} from './Profile_styles'
import {TextField} from "@mui/material";
import {Post} from "./Post/Post";

export class Profile extends React.Component {
    render() {
        return (
            <S.Content className='content'>
                <TextField id="standard-basic" label="New post" variant="standard" />
                <ul>
                    <li> <Post message='Hello!'/></li>
                    <li> <Post message='Hello!'/></li>
                    <li> <Post message='QQ!'/></li>
                    <li> <Post message='How are you?'/></li>
                </ul>

            </S.Content>
        );
    }
}

