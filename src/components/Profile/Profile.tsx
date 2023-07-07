import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";
import {CreatedNewPostBlock} from './Profile_styles';
import {Post} from "../Post/Post";
import {ProfileInfo} from "./ProfileInfo";
import {TPostDataItem} from "../../redux/state";

interface IPostData {
    postData: TPostDataItem[]
    postTitle: string
    addPost: (newPost: string) => void
    changePostText: (postText: string) => void
}


export class Profile extends React.Component<IPostData> {

    newPostElement = React.createRef<HTMLInputElement>()
    onAddPost = () => {
        const newPost = this.newPostElement.current?.value
        if (newPost) {
            this.props.addPost(newPost)
        }
    }

    onChangePostText = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.changePostText(e.currentTarget.value)
    }

    render() {

        const {postData, postTitle} = this.props

        return (
            <>
                <ProfileInfo/>
                <CreatedNewPostBlock>
                    <TextField id="standard-basic" label="New post" value={postTitle} onChange={this.onChangePostText}
                               variant="standard" inputRef={this.newPostElement}/>
                    <button onClick={this.onAddPost}>Add post</button>
                </CreatedNewPostBlock>
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

