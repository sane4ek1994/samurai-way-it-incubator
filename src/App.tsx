import React from 'react'
import {Header} from './Header'

import './App.css'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                Hello, samurai! Let's go!
                <h1>Go!</h1>
            </div>
        )
    }
}

export default App
