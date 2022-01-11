import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    const { followers } = this.props;
    // Map the Followers
    const followArr = followers.map((follower) => {
      return <Follower follower={follower} />;
    });
    return (
      <div>
        <h2>Followers:</h2>
        <div>{followArr}</div>
      </div>
    );
  }
}

export default FollowerList;
