import typeInput from "../typeInput"

const ADD_MESSAGE = 'ADD-MESSAGE'
const SET_NEW_MESSAGE_ADDED = 'SET-NEW-MESSAGE-ADDED'
const SET_FIRST_DIALOG_LOAD = 'SET-FIRST-DIALOG-LOAD'
const TYPE_INPUT = 'TYPE-INPUT'

const initialState = {
    contacts: [
        {
            id: '0',
            name: 'Jack',
            otherAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.favpng.com%2F12%2F24%2F21%2Fcomputer-icons-user-profile-avatar-png-favpng-iF7LFc6aK84wYXRefMfarWwtS.jpg&f=1&nofb=1'
        },
        {
            id: '1',
            name: 'John',
            otherAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.favpng.com%2F12%2F24%2F21%2Fcomputer-icons-user-profile-avatar-png-favpng-iF7LFc6aK84wYXRefMfarWwtS.jpg&f=1&nofb=1'
        },
        {
            id: '2',
            name: 'Joe',
            otherAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.favpng.com%2F12%2F24%2F21%2Fcomputer-icons-user-profile-avatar-png-favpng-iF7LFc6aK84wYXRefMfarWwtS.jpg&f=1&nofb=1'
        },
        {
            id: '3',
            name: 'Jay',
            otherAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.favpng.com%2F12%2F24%2F21%2Fcomputer-icons-user-profile-avatar-png-favpng-iF7LFc6aK84wYXRefMfarWwtS.jpg&f=1&nofb=1'
        },
    ],
    dialogsData: {
        dialogs: [
            {
                id: '0',
                content: [
                    {id: '0', text: 'What`s up', origin: 'sent'},
                    {id: '1', text: 'It`s fine, wanna go party?', origin: 'received'},
                    {id: '2', text: 'No man, i`m at the writers club today', origin: 'sent'},
                    {id: '3', text: 'Alrighty then', origin: 'received'},
                ],
            },
            {
                id: '1',
                content: [
                    {id: '0', text: 'How is it', origin: 'received'},
                    {id: '1', text: 'All good', origin: 'sent'},
                    {id: '2', text: 'Nice', origin: 'received'},
                ],
            },
            {
                id: '2',
                content: [
                    {id: '0', text: 'I`m getting married', origin: 'sent'},
                    {id: '1', text: 'Wow, congratulations', origin: 'received'},
                    {id: '2', text: 'Appreciate it, thanks', origin: 'sent'},
                    {id: '3', text: 'Cool', origin: 'received'},
                    {id: '4', text: 'So, when`s that gonna go down?', origin: 'received'},
                    {id: '5', text: 'This saturday', origin: 'sent'},
                    {id: '6', text: 'Can i join?', origin: 'received'},
                    {id: '7', text: 'Maybe...', origin: 'sent'},
                ],
            },
            {
                id: '3',
                content: [
                    {id: '0', text: 'Pizza', origin: 'received'},
                    {id: '1', text: 'Borgar', origin: 'sent'},
                    {id: '2', text: 'Pizzaaaaaaaaaa', origin: 'received'},
                    {id: '3', text: 'Yes', origin: 'sent'},
                ],
            },
        ],
        avatars: {
            userAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegraphicsfairy.com%2Fwp-content%2Fuploads%2Fblogger%2F-quWPp1Tddvs%2FT2nhENp1d_I%2FAAAAAAAARBg%2F7htjcDjxj4Q%2Fs1600%2FPhone-man-Retro-Image-Graphics-Fairy.jpg&f=1&nofb=1',
            otherAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.favpng.com%2F12%2F24%2F21%2Fcomputer-icons-user-profile-avatar-png-favpng-iF7LFc6aK84wYXRefMfarWwtS.jpg&f=1&nofb=1',
        },
        inputBox: '',
        newMessageAdded: false,
        firstDialogLoad: true,
    },
}

export const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        // Store text input in new post or new message areas
        case TYPE_INPUT:
            if (action.category === 'message') {
                state.dialogsData.inputBox = typeInput(
                    state.dialogsData.inputBox,
                    action)
            }
            break
        // Store new message to state
        case ADD_MESSAGE:
            let dialogs = state.dialogsData.dialogs
            let dialogData = dialogs[action.dialogID]
            let newMessageId =
                Number(dialogData.content[dialogData.content.length - 1].id) + 1

            // Ignore empty message sends
            if (state.dialogsData.inputBox !== '') {
                let newMessage = {
                    id: `${newMessageId}`,
                    text: state.dialogsData.inputBox,
                    origin: 'sent',
                    userAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegraphicsfairy.com%2Fwp-content%2Fuploads%2Fblogger%2F-quWPp1Tddvs%2FT2nhENp1d_I%2FAAAAAAAARBg%2F7htjcDjxj4Q%2Fs1600%2FPhone-man-Retro-Image-Graphics-Fairy.jpg&f=1&nofb=1',
                }
                state.dialogsData.dialogs[action.dialogID].content.push(newMessage)
                state.dialogsData.inputBox = ''
                state.dialogsData.newMessageAdded = true
            }
            break
        // New message addition flag for scrolling to last message
        case SET_NEW_MESSAGE_ADDED:
            state.dialogsData.newMessageAdded = action.flag
            break
        // First dialog load flag for scrolling to last message
        case SET_FIRST_DIALOG_LOAD:
            state.dialogsData.firstDialogLoad = action.flag
            break
        // no default
    }

    return state
}

export const addMessageActionCreator = (dialogID) => ({
    type: ADD_MESSAGE,
    dialogID: dialogID,
})

export const setNewMessageAddedActionCreator = (flag) => ({
    type: SET_NEW_MESSAGE_ADDED,
    flag: flag,
})

export const setFirstDialogLoadActionCreator = (flag) => ({
        type: SET_FIRST_DIALOG_LOAD,
        flag: flag,
})