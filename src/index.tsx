import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {store, TState} from './redux/state';


let rerenderEntireThree = (state: TState) => {

    ReactDOM.render(
        <BrowserRouter>
            <App {...state} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} changeMessageText={store.changeMessageText.bind(store)} changePostText={store.changePostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'))
}

rerenderEntireThree(store.getState())

store.subscribe(rerenderEntireThree)
