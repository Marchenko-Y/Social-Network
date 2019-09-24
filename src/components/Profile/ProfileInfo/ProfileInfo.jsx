import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="http://i59.fastpic.ru/big/2013/1016/38/9ef91f5501cf16d08c05d599bda57838.jpeg"
          alt="sfsf"
        />
      </div>
      <div className={styles.descriptionBlock}>ava+desc</div>
    </div>
  );
};

export default ProfileInfo;
