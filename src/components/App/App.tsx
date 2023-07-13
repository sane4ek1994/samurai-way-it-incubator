import React from 'react'
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";

import {S} from './App_styles'
import {Route} from "react-router-dom";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";
import {TState} from "../../redux/state";


type TAppProps = {
    addPost: (postText: string) => void
    changePostText: (postText: string) => void
    addMessage: (messageText: string) => void
    changeMessageText: (messageText: string) => void
}
type TApp = TState & TAppProps

class App extends React.Component<TApp> {
    render() {
        const {postData, postTitle} = this.props.profilePage
        const {messageData, dialogsData, message} = this.props.dialogsPage
        const {addPost, changePostText, addMessage, changeMessageText} = this.props
        return (
            <S.AppWrapper>
                <Header/>
                <Navbar/>
                <S.Content>
                    <Route path='/profile' render={() => <Profile postTitle={postTitle} changePostText={changePostText}
                                                                  addPost={addPost} postData={postData}/>}/>
                    <Route path='/messages'
                           render={() => <Dialogs dialogsData={dialogsData} message={message} addMessage={addMessage} changeMessageText={changeMessageText} messageData={messageData}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </S.Content>
            </S.AppWrapper>
        )
    }
}

export default App