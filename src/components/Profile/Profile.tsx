import React from 'react';
import {TextField} from "@mui/material";
import {Post} from "../Post/Post";
import {ProfileInfo} from "./ProfileInfo";
import {TPostData} from "../App/App";


export class Profile extends React.Component<TPostData> {
    render() {
        const {postData} = this.props
        return (
            <>
                <ProfileInfo/>
                <TextField id="standard-basic" label="New post" variant="standard"/>
                <ul>
                    {postData.map(post =>
                        <li key={post.id}>
                            <Post
                                id={post.id}
                                message={post.message}
                                likeCount={post.likeCount}/>
                        </li>)}
                </ul>

            </>
        );
    }
}

