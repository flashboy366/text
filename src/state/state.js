let renderTree = () => { }

export const subscribe = (observer) => {
    renderTree = observer
}

let state = {
    profileData: {
        postData: {
            posts: [
                {
                    id: '0',
                    text: 'A world of dew, and within every dewdrop a world of struggle.',
                    likes: '8'
                },
                {
                    id: '1',
                    text: 'Love between us is speech and breath. Loving you is a long river running.',
                    likes: '11'
                }
            ],
            inputBox: '',
        },
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegraphicsfairy.com%2Fwp-content%2Fuploads%2Fblogger%2F-quWPp1Tddvs%2FT2nhENp1d_I%2FAAAAAAAARBg%2F7htjcDjxj4Q%2Fs1600%2FPhone-man-Retro-Image-Graphics-Fairy.jpg&f=1&nofb=1'
    },
    messagesData: {
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
    },
}


export let typeInput = (text, category) => {
    if (text.slice(-1) !== '\n') {
        (category === 'post')
            ? state.profileData.postData.inputBox = text
            : state.messagesData.dialogsData.inputBox = text
    }
    renderTree(state)
}

export let addPost = () => {

    let posts = state.profileData.postData.posts
    let newPostId = Number(posts[posts.length - 1].id) + 1

    if (state.profileData.postData.inputBox !== '') {
        let newPost = {
            id: `${newPostId}`,
            text: state.profileData.postData.inputBox,
            likes: '0'
        }
        state.profileData.postData.posts.push(newPost)
        state.profileData.postData.inputBox = ''
        renderTree(state)
    }
}

export let addLike = (postId) => {

    let previousLikes = state.profileData.postData.posts[postId].likes

    state.profileData.postData.posts[postId].likes = Number(previousLikes) + 1

    renderTree(state)
    console.log(state.profileData.postData.posts[postId])
}

export let addMessage = (dialogId) => {

    let dialogs = state.messagesData.dialogsData.dialogs
    let dialogData = dialogs[dialogId]
    let newMessageId =
        Number(dialogData.content[dialogData.content.length - 1].id) + 1

    if (state.messagesData.dialogsData.inputBox !== '') {
        let newMessage = {
            id: `${newMessageId}`,
            text: state.messagesData.dialogsData.inputBox,
            origin: 'sent',
            userAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegraphicsfairy.com%2Fwp-content%2Fuploads%2Fblogger%2F-quWPp1Tddvs%2FT2nhENp1d_I%2FAAAAAAAARBg%2F7htjcDjxj4Q%2Fs1600%2FPhone-man-Retro-Image-Graphics-Fairy.jpg&f=1&nofb=1',
        }
        state.messagesData.dialogsData.dialogs[dialogId].content.push(newMessage)
        state.messagesData.dialogsData.inputBox = ''
        renderTree(state)
        state.messagesData.dialogsData.newMessageAdded = true
    }
}

export let setNewMessageAdded = (flag) => {
    state.messagesData.dialogsData.newMessageAdded = flag
}

export let firstDialogLoadSet = (flag) => {
    state.messagesData.dialogsData.firstDialogLoad = flag
}

export default state;