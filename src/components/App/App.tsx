import React from 'react'
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import {Profile} from "../Profile/Profile";

import {S} from './App_styles'

class App extends React.Component {
    render() {
        return (
            <S.AppWrapper >
                <Header/>
                <Navbar/>
                <Profile/>
            </S.AppWrapper>
        )
    }
}

export default App


