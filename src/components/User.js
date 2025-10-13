import { useEffect } from "react";

const User = ({ userInfo }) => {
  return (
    <div className="user-info">
      <div className="user-avatar-container">
        <div className="avatar-container">
          <img src={userInfo.image} className="user-avatar" />
        </div>
        <div>
          <p className="full-name">{`${userInfo?.firstName} ${userInfo.lastName}`}</p>
          <p className="username">@{userInfo.username}</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default User;
