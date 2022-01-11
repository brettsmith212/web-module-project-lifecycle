import React from "react";

class User extends React.Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <div>
          <img src={userInfo.avatar_url} alt="profile picture" />
        </div>
        <div>
          <h2>{userInfo.name}</h2>
          <h3>{userInfo.login}</h3>
          <h3>Total Repos: {userInfo.public_repos}</h3>
          <h3>Total Followers: {userInfo.followers}</h3>
        </div>
      </div>
    );
  }
}

export default User;
