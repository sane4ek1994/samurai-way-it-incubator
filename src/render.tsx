import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changePostText} from './redux/state'


export const rerenderThree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App {...state} addPost={addPost} changePostText={changePostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}