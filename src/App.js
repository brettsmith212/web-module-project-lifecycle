import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import axios from "axios";

class App extends React.Component {
  state = {
    user: "",
    userInfo: {},
    followers: [],
  };

  componentDidMount() {
    // axios
    //   .get("https://api.github.com/users/brettsmith212")
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({
    //       ...this.state,
    //       userInfo: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  componentDidUpdate() {
    // if (this.state.followers.length === 0) {
    //   axios
    //     .get("https://api.github.com/users/brettsmith212/followers")
    //     .then((res) => {
    //       console.log(res.data);
    //       this.setState({
    //         ...this.state,
    //         followers: [...res.data],
    //       });
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // }
  }

  render() {
    console.log("USERINFO: ", this.state.userInfo);
    console.log("FOLLOWERS: ", this.state.followers);
    return (
      <div>
        Github Card
        <div>
          <User userInfo={this.state.userInfo} />
        </div>
        <div>
          <FollowerList followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
