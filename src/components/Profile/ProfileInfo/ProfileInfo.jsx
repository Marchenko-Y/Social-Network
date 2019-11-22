import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} alt="avatar" />
        <div className={styles.profileDescription}>
          <p>
            <strong>Status</strong>
            <ProfileStatus
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </p>
          <p>
            <strong>Full name: </strong>
            {props.profile.fullName}
          </p>
          <p>
            <strong>About me:</strong> {props.profile.aboutMe}
          </p>
          <p>
            <strong>Contacts:</strong>
          </p>
          <p>
            <strong>Facebook :</strong>
            {props.profile.contacts.facebook}
          </p>
          <p>
            <strong>VK : </strong> {props.profile.contacts.vk}
          </p>
          <p>
            <strong>Twitter : </strong> {props.profile.contacts.twitter}
          </p>
          <p>
            <strong>Instagram : </strong>
            {props.profile.contacts.instagram}
          </p>
          <p>
            <strong>Facebook :</strong> {props.profile.contacts.facebook}
          </p>
          <p>
            <strong>GitHub: </strong>
            {props.profile.contacts.github}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
