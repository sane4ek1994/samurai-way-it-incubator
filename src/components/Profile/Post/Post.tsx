import React from 'react';
import {IconButton} from "@mui/material";
import ThumbUpOffAltTwoToneIcon from '@mui/icons-material/ThumbUpOffAltTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';

import {S} from './Post_styles';

type TPost = {
    message: string
}

export class Post extends React.Component<TPost> {
    constructor(props: TPost) {
        super(props);
        this.state = { message: props.message };
    }
    render() {
        const {message} = this.props

        return (
           <>
               <S.PostWrapper>
                   <S.PostAvatar>
                       <PersonOutlineTwoToneIcon fontSize="large"/>
                   </S.PostAvatar>
                   <div>{message}</div>
               </S.PostWrapper>
               <IconButton color="primary" aria-label="like">
                   <ThumbUpOffAltTwoToneIcon />
               </IconButton>
           </>
        );
    }
}

