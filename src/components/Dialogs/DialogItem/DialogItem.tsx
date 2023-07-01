import React, {Component} from "react";
import {NavLink} from "react-router-dom";

type TDialogItem = {
    id: string
    name: string
}

export class DialogItem extends Component<TDialogItem, TDialogItem> {
    constructor(props: TDialogItem) {
        super(props);
        this.state = {id: props.id, name: props.name}

    }

    render() {
        return (
            <div className="dialog">
                <NavLink to={`/messages/${this.props.id}`}>{this.props.name}</NavLink>
            </div>
        )
    }
}