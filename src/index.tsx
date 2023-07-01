import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";

const postData = [
    {id: '1', message: 'Hello!', likeCount: 0},
    {id: '2', message: 'Hello!', likeCount: 4},
    {id: '3', message: 'Hello!', likeCount: 101},
    {id: '4', message: 'Hello!', likeCount: -5},
]

const dialogData = [
    {id: '1', name: 'Alex'},
    {id: '2', name: 'Ksu'},
    {id: '3', name: 'Lev'},
    {id: '4', name: 'Alex'},
]

const messageData = [
    {id: '1', message: 'Hello!!'},
    {id: '2', message: 'QQ!!'},
    {id: '3', message: 'Im progger!!'},
    {id: '4', message: 'GG'},
]


ReactDOM.render(
    <BrowserRouter>
        <App dialogData={dialogData} messageData={messageData} postData={postData}/>
    </BrowserRouter>,
  document.getElementById('root')
);