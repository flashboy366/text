import cln from './ProfileData.module.css';


const ProfileData = (props) => {
    return (
        <div className={cln.profileData}>
            <h2>Profile</h2>
            <div className={cln.avatarAndDesc}>
                <div className={cln.avatar}>
                    <img alt='' src={props.avatarData}></img>
                </div>
                <div className={cln.description}>
                    Description.
                </div>
            </div>
        </div>
    );
}

export default ProfileData;