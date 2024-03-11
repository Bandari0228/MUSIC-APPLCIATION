import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <img src={user.photoURL} alt={user.displayName} />
    </div>
  );
};

export default UserProfile;