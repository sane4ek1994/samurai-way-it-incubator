import React, {Component} from 'react';
import {S} from './Dialog_styles'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {TDialogData, TMessageData} from "../App/App";

type TDialogs = TDialogData & TMessageData

export class Dialogs extends Component<TDialogs> {

    render() {
        const {dialogData, messageData} = this.props
        return (
            <S.Dialogs>
                <div className="dialogs-items">
                    {dialogData.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)}
                </div>
                <div className="messages">
                    {messageData.map(message => <Message key={message.id} message={message.message}/>)}
                </div>
            </S.Dialogs>
        );
    }
}