import React, {Component} from "react";

type TMessage = {
    message: string
}

export class Message extends Component<TMessage, TMessage> {
    constructor(props: TMessage) {
        super(props);
        this.state = {message: props.message}
    }

    render() {
        return (
            <div className="message">{this.props.message}</div>
        )

    }
}