import cln from './Profile.module.scss';
import PostArea from './PostArea/PostArea';
import ProfileData from "./ProfileData/ProfileData";


const Profile = (props) => {

    return (
        <div className={cln.profile}>
            <div className={cln.profileData}>
                <ProfileData avatarData={props.profileData.avatar}/>
            </div>
            <hr className={cln.horizontalDivider}></hr>
            <div className={cln.postArea}>
                <PostArea
                    profileData={props.profileData}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}

export default Profile;