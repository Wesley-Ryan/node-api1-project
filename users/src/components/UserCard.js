import React from "react";

const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserCard;
