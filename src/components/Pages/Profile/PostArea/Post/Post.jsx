import cln from './Post.module.css';


const Post = (props) => {

    let handleLikeClick = () => props.addLike(props.id)


    return (
        <div className={cln.post}>
            {/* Avatar of post author */}
            <div className={cln.avatar}>
                <img src={props.avatar}></img>
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