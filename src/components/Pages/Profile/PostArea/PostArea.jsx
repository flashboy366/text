import cln from './PostArea.module.css';
import Post from './Post/Post';
import {createRef} from "react";


const PostArea = (props) => {

    // Generate post components list
    let postEls = props.profileData.postData.posts.slice(0).reverse()
        .map(p => <Post
            text={p.text}
            likes={p.likes} id={p.id}
            avatar={props.profileData.avatar}
            addLike={props.addLike}
        />)


    // Handle new post input and store it to state
    let typeArea = createRef()
    let type = () => {
        let text = typeArea.current.value
        props.typeInput(text, 'post')
    }

    // Add new post to state
    let addPost = () => props.addPost()
    // Handle adding new post with Enter keypress
    let handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }

    // Handle button click for adding new post
    let handleUploadClick = () => props.addPost()


    return (
        <div className={cln.postArea}>
            <h2>
                Posts
            </h2>
            <div>
                <h4>
                    New post
                </h4>
                {/* New post input area */}
                <div>
                    <textarea
                        ref={typeArea}
                        placeholder='Type here...'
                        cols='50'
                        rows='5'
                        onChange={(e) => type(e)}
                        value={props.profileData.postData.inputBox}
                        onKeyPress={(e) => handleKeyPress(e)}
                    > </textarea>
                </div>
                {/* Button for adding new post */}
                <div>
                    <button
                        className={cln.uploadButton}
                        onClick={handleUploadClick}
                    >Upload</button>
                </div>
            </div>
            {/* Post components */}
            <div className={cln.posts}>
                {postEls}
            </div>
        </div>
    );
}

export default PostArea;