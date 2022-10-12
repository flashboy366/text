import typeInput from "../typeInput"

const TYPE_INPUT = 'TYPE-INPUT'
const ADD_POST = 'ADD-POST'
const ADD_LIKE = 'ADD-LIKE'

const initialState = {
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
    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthegraphicsfairy.com%2Fwp-content%2Fuploads%2Fblogger%2F-quWPp1Tddvs%2FT2nhENp1d_I%2FAAAAAAAARBg%2F7htjcDjxj4Q%2Fs1600%2FPhone-man-Retro-Image-Graphics-Fairy.jpg&f=1&nofb=1',
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        // Store text input in new post or new message areas
        case TYPE_INPUT:
            if (action.category === 'post') {
                state.postData.inputBox = typeInput(
                    state.postData.inputBox,
                    action)
            }
            break
        // Store new post to state
        case ADD_POST:
            let posts = state.postData.posts
            let newPostId = Number(posts[posts.length - 1].id) + 1
    
            if (state.postData.inputBox !== '') {
                let newPost = {
                    id: `${newPostId}`,
                    text: state.postData.inputBox,
                    likes: '0'
                }
                state.postData.posts.push(newPost)
                state.postData.inputBox = ''
            }
            break
        // Add like to post
        case ADD_LIKE:
            let previousLikes = state.postData.posts[action.postID].likes

            state.postData.posts[action.postID].likes = Number(previousLikes) + 1
            break
        // no default
    }

    return state
}

export const typeInputActionCreator = (text, category) => ({
    type: TYPE_INPUT,
    text: text,
    category: category,
})

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const addLikeActionCreator = (postID) => ({
    type: ADD_LIKE,
    postID: postID,
})