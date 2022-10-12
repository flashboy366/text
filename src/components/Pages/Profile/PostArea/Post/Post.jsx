import cln from './Post.module.css';
import { addLikeActionCreator }
    from '../../../../../redux/reducers/profileReducer/profileReducer';

const Post = (props) => {

    let handleLikeClick = () => {
        let action = addLikeActionCreator(props.id)
        props.dispatch(action)
    }


    return (
        <div className={cln.post}>
            {/* Avatar of post author */}
            <div className={cln.avatar}>
                <img alt='' src={props.avatar}></img>
            </div>
            {/* Post contents */}
            <div className={cln.text}>
                {props.text}
            </div>
            {/* Like button and counter */}
            <div className={cln.buttonPanel}>
                <div className={cln.likes}>
                    <span className={cln.likeCount}>{props.likes}</span>
                    <button
                        className={cln.likeButton}
                        onClick={handleLikeClick}>♡
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Post;