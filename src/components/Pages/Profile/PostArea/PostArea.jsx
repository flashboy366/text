import cln from './PostArea.module.css';
import Post from './Post/Post';
import {createRef} from "react";


const PostArea = (props) => {

    let postEls = props.profileData.postData.posts.slice(0).reverse()
        .map(p => <Post
            text={p.text}
            likes={p.likes} id={p.id}
            avatar={props.profileData.avatar}
            addLike={props.addLike}
        />)


    let typeArea = createRef()
    let type = () => {
        let text = typeArea.current.value
        props.typeInput(text, 'post')
    }

    let addPost = () => props.addPost()
    let handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }

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
                <div>
                    <button
                        className={cln.uploadButton}
                        onClick={handleUploadClick}
                    >Upload</button>
                </div>
            </div>
            <div className={cln.posts}>
                {postEls}
            </div>
        </div>
    );
}

export default PostArea;