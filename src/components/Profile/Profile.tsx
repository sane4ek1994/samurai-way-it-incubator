import React from 'react';
import {TextField} from "@mui/material";
import {Post} from "./Post/Post";

export class Profile extends React.Component {
    render() {

        return (
            <>
                <TextField id="standard-basic" label="New post" variant="standard" />
                <ul>
                    <li> <Post message='Hello!' likeCount={0}/></li>
                    <li> <Post message='Hello!' likeCount={2}/></li>
                    <li> <Post message='QQ!' likeCount={100}/></li>
                    <li> <Post message='How are you?' likeCount={0}/></li>
                </ul>

            </>
        );
    }
}

