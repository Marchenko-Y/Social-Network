import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/user.png";
import ProfileInfoForm from "./ProfileInfoForm";

const ProfileInfo = props => {
  debugger;
  const [editMode, setEditMode] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }
  const onUserPhotoSelected = e => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = formData => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          src={props.profile.photos.large || userPhoto}
          alt="avatar"
          className={styles.userPhoto}
        />
        {props.isOwner && <input type="file" onChange={onUserPhotoSelected} />}
        <div className={styles.profileDescription}>
          <div>
            <b>Status</b>
            <ProfileStatus
              status={props.status}
              updateStatus={props.updateStatus}
            />
            {editMode ? (
              <ProfileInfoForm
                initialValues={props.profile}
                profile={props.profile}
                onSubmit={onSubmit}
              />
            ) : (
              <ProfileDate
                profile={props.profile}
                turnOnEditMode={() => {
                  setEditMode(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileDate = ({ profile, turnOnEditMode }) => {
  return (
    <div>
      <div>
        <button onClick={turnOnEditMode}>Edit</button>
      </div>
      <div>
        <b>Full name: </b>
        {profile.fullName}
      </div>
      <div>
        <b>About me: </b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Looking for a job:</b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>

      <div>
        <b>My professional skills:</b>
        {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => {
          return (
            <Contacts contactTitle={key} contactValue={profile.contacts[key]} />
          );
        })}
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle} :</b> {contactValue}
    </div>
  );
};

export default ProfileInfo;
