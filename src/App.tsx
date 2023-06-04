import React from 'react'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

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


