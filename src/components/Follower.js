import React from "react";

class Follower extends React.Component {
  render() {
    const { follower } = this.props;
    return (
      <div>
        <h3>{follower.login}</h3>
        <img src={follower.avatar_url} alt="" />
      </div>
    );
  }
}

export default Follower;
