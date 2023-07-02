import React from 'react'
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";

import {S} from './App_styles'
import {Route} from "react-router-dom";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";

type TPostDataElement = {
    id: string
    message: string
    likeCount: number
}

type TDialogItem = {
    id: string
    name: string
}

type TMessageItem = {
    id: string
    message: string
}

export type TDialogData = {
    dialogData: TDialogItem[]
}

export type TMessageData = {
    messageData: TMessageItem[]
}

export type TPostData = {
    postData: TPostDataElement[]
}

type TProps = TPostData & TDialogData & TMessageData

class App extends React.Component<TProps> {
    render() {
        const {postData, messageData, dialogData} = this.props
        return (
            <S.AppWrapper>
                <Header/>
                <Navbar/>
                <S.Content>
                    <Route path='/profile' render={() => <Profile postData={postData}/>}/>
                    <Route path='/messages' render={() => <Dialogs dialogData={dialogData} messageData={messageData} />}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </S.Content>
            </S.AppWrapper>
        )
    }
}

export default App




