import cln from './ProfileData.module.scss';


const ProfileData = (props) => {
    return (
        <div className={cln.profileData}>
            <span className={cln.header}>Profile</span>
            <div className={cln.avatar}>
                <img alt='' src={props.avatarData}></img>
            </div>
            <div className={cln.description}>
                This descripition is so damn descriptive that i cannot even begin to comprehend the full scale of the detailed descriptiveness of this work of art right here.
            </div>
        </div>
    );
}

export default ProfileData;