import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = event => {
    setStatus(event.currentTarget.value);
  };
  return (
    <>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "No status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus="true"
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
