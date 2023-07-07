import {rerenderThree} from "../render";

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
        messageData: TMessageItem[]
    }

}

export const state: TState = {
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
        ]
    }
}

export const addPost = (message: string) => {
    state.profilePage.postData.push({id: `${Date.now()}`, message, likeCount: 0})
    state.profilePage.postTitle = ''
    rerenderThree(state)
}

export const changePostText = (text: string) => {
    state.profilePage.postTitle = text
    rerenderThree(state)
}


