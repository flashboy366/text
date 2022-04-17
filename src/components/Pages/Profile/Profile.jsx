import cln from './Profile.module.css';
import PostArea from './PostArea/PostArea';
import ProfileData from "./ProfileData/ProfileData";


const Profile = (props) => {

    return (
        <div className={cln.profile}>
            <ProfileData avatarData={props.profileData.avatar}/>
            <hr></hr>
            <PostArea
                profileData={props.profileData}
                typeInput={props.typeInput}
                addPost={props.addPost}
                addLike={props.addLike}
            />
        </div>
    );
}

export default Profile;