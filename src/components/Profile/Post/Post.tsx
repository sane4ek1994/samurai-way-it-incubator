import React from 'react';
import {IconButton} from "@mui/material";
import ThumbUpOffAltTwoToneIcon from '@mui/icons-material/ThumbUpOffAltTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';

import {S} from './Post_styles';

type TPost = {
    message: string
    likeCount: number
}

export class Post extends React.Component<TPost, TPost> {
    constructor(props: TPost) {
        super(props);
        this.state = { message: props.message,likeCount: props.likeCount } ;
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }

    handleLikeClick() {
        this.setState(prevState => ({...prevState, likeCount: prevState.likeCount + 1}))
    }

    render() {
        const {message, likeCount} = this.state

        return (
           <>
               <S.PostWrapper>
                   <S.PostAvatar>
                       <PersonOutlineTwoToneIcon fontSize="large"/>
                   </S.PostAvatar>
                   <S.Message>{message}</S.Message>
               </S.PostWrapper>
              <S.WrapperBtns>
                  <IconButton onClick={this.handleLikeClick} color="primary" aria-label="like">
                      <ThumbUpOffAltTwoToneIcon fontSize='small' />
                      <span>{likeCount}</span>
                  </IconButton>
              </S.WrapperBtns>
           </>
        );
    }
}

