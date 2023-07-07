import React, {Component} from 'react';
import {S} from './Dialog_styles'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {TDialogItem, TMessageItem} from "../../redux/state";
import {TextField} from "@mui/material";


interface IDialogsProps {
    dialogsData: TDialogItem[];
    messageData: TMessageItem[];
}
export class Dialogs extends Component<IDialogsProps> {
    newMessageElement = React.createRef<HTMLInputElement>()

    onAddMessage = () => {
        const newMessage = this.newMessageElement.current?.value
        alert(newMessage)
    }
    render() {
        const {dialogsData, messageData} = this.props
        return (
            <S.Dialogs>
                <div className="dialogs-items">
                    {dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)}
                </div>
                <div className="messages">
                    {messageData.map(message => <Message key={message.id} message={message.message}/>)}
                </div>
                <div>
                    <TextField id="standard-basic" label="New message" variant="standard" inputRef={this.newMessageElement}/>
                    <button onClick={this.onAddMessage}>Send message</button>
                </div>
            </S.Dialogs>
        );
    }
}