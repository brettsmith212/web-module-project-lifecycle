import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    const { followers } = this.props;
    // Map the Followers

    return (
      <div>
        <h2>Followers:</h2>
        <div>
          <Follower />
        </div>
      </div>
    );
  }
}

export default FollowerList;
