import React, {ChangeEvent, Component} from 'react';
import {S} from './Dialog_styles'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {TDialogItem, TMessageItem} from "../../redux/state";
import {TextField} from "@mui/material";


interface IDialogsProps {
    message: string
    dialogsData: TDialogItem[];
    messageData: TMessageItem[];
    addMessage: (newMessage: string) => void
    changeMessageText: (newMessage: string) => void
}

export class Dialogs extends Component<IDialogsProps> {
    newMessageElement = React.createRef<HTMLInputElement>()

    onAddMessage = () => {
        const newMessage = this.newMessageElement.current?.value
        if (typeof newMessage === "string") {
            this.props.addMessage(newMessage)
        }
    }

    changeMessageValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.changeMessageText(e.currentTarget.value)
    }

    render() {
        const {dialogsData, messageData, message} = this.props
        return (
            <S.Dialogs>
                <div className="dialogs-items">
                    {dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)}
                </div>
                <div className="messages">
                    {messageData.map(message => <Message key={message.id} message={message.message}/>)}
                </div>
                <div>
                    <TextField id="standard-basic" label="New message" variant="standard" value={message}
                               onChange={this.changeMessageValue} inputRef={this.newMessageElement}/>
                    <button onClick={this.onAddMessage}>Send message</button>
                </div>
            </S.Dialogs>
        );
    }
}