import React from 'react'
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";

import {S} from './App_styles'
import {Route} from "react-router-dom";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";


class App extends React.Component {
    render() {
        return (
            <S.AppWrapper >
                <Header/>
                <Navbar/>
                <S.Content>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Dialogs}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </S.Content>
            </S.AppWrapper>
        )
    }
}

export default App




