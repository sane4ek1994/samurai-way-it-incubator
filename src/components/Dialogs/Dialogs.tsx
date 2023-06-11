import React, {Component} from 'react';
import {S} from './Dialog_styles'
export  class Dialogs extends Component {
 render() {
        return (
            <S.Dialogs>
                <div className="dialogs-items">
                    <div className="dialog">Alex</div>
                    <div className="dialog">Ksu</div>
                    <div className="dialog">Lev</div>
                    <div className="dialog">Alex</div>
                </div>
                <div className="messages">
                    <div className="message">Hello!</div>
                    <div className="message">QQ!</div>
                    <div className="message">How are you?</div>
                </div>
            </S.Dialogs>
        );
    }
}