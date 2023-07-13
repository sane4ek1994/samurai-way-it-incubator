export type TPostDataItem = {
    id: string
    message: string
    likeCount: number
}
export type TDialogItem = {
    id: string
    name: string
}
export type TMessageItem = {
    id: string
    message: string
}

export type TState = {
    profilePage: {
        postData: TPostDataItem[],
        postTitle: string
    },
    dialogsPage: {
        dialogsData: TDialogItem[],
        messageData: TMessageItem[],
        message: string
    }
}

type TStore = {
    _state: TState
    getState: () => TState,
    _rerenderThree: (state: TState) => void
    addPost: (message: string) => void
    changePostText: (text: string) => void
    addMessage: (newMessage: string) => void
    changeMessageText: (newMessage: string) => void
    subscribe: (observer: any) => void
}


//OOP подход
export let store: TStore = {
    _state: {
        profilePage: {
            postData: [
                {id: '1', message: 'Hello!', likeCount: 0},
                {id: '2', message: 'QQ!', likeCount: 4},
                {id: '3', message: 'qqq!', likeCount: 101},
                {id: '4', message: 'Who im a!', likeCount: -5},
            ],
            postTitle: 'Samuray Alex'
        },
        dialogsPage: {
            dialogsData: [
                {id: '1', name: 'Alex'},
                {id: '2', name: 'Ksu'},
                {id: '3', name: 'Lev'},
                {id: '4', name: 'Alex'},
            ],
            messageData: [
                {id: '1', message: 'Hello!!'},
                {id: '2', message: 'QQ!!'},
                {id: '3', message: 'Im progger!!'},
                {id: '4', message: 'GG'},
            ],
            message: 'I`m new message!'
        }
    },

    getState() {
        return this._state
    },
    _rerenderThree(state: TState) {
        console.log('State changed')
    },
    addPost(message: string) {
        this._state.profilePage.postData.unshift({id: `${Date.now()}`, message, likeCount: 0})
        this._state.profilePage.postTitle = ''
        this._rerenderThree(this._state)
    },
    changePostText(text: string) {
        this._state.profilePage.postTitle = text
        this._rerenderThree(this._state)
    },
    addMessage(newMessage: string) {
        this._state.dialogsPage.messageData.push({id: `${Date.now()}`, message: newMessage})
        this._state.dialogsPage.message = ''
        this._rerenderThree(this._state)
    },
    changeMessageText(newMessage: string) {
        this._state.dialogsPage.message = newMessage
        this._rerenderThree(this._state)
    },
    subscribe(observer: any) {
        this._rerenderThree = observer
    }
}





