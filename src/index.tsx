import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changePostText, state, subscribe, TState} from './redux/state'


let rerenderEntireThree = (state: TState) => {

    ReactDOM.render(
        <BrowserRouter>
            <App {...state} addPost={addPost} changePostText={changePostText}/>
        </BrowserRouter>,
        document.getElementById('root'))
}

rerenderEntireThree(state)

subscribe(rerenderEntireThree)
