import React from 'react';
import './profile.css';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userId: '123',
        name: 'John Doe',
        email: 'john.doe@example.com',
        preferences: {
          theme: 'light',
          language: 'en',
        },
        settings: {
          notifications: true,
        },
      },
    };
  }

  render() {
    const { userId, name, email, preferences, settings } = this.state.user;

    return (
      <div className="user-profile">
        <h2>{name}</h2>
        <p>User ID: {userId}</p>
        <p>Email: {email}</p>
        <h3>Preferences</h3>
        <p>Theme: {preferences.theme}</p>
        <p>Language: {preferences.language}</p>
        <h3>Settings</h3>
        <p>Notifications: {settings.notifications ? 'Enabled' : 'Disabled'}</p>
      </div>
    );
  }
}

export default UserProfile;