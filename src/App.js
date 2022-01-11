import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import axios from "axios";
import styled from "styled-components";

// const userData = {
//   login: "brettsmith212",
//   avatar_url: "https://avatars.githubusercontent.com/u/67445684?v=4",
//   followers: 3,
//   public_repos: 49,
// };

// const followerData = [
//   {
//     login: "davidjsmith44",
//     avatar_url: "https://avatars.githubusercontent.com/u/35585650?v=4",
//   },
//   {
//     login: "DatBoiLuiskrrt",
//     avatar_url: "https://avatars.githubusercontent.com/u/42678545?v=4",
//   },
//   {
//     login: "ethansmith1855",
//     avatar_url: "https://avatars.githubusercontent.com/u/89827161?v=4",
//   },
// ];

class App extends React.Component {
  state = {
    user: "brettsmith212",
    userInfo: {},
    followers: [],
    // userInfo: userData,
    // followers: followerData,
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          userInfo: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      axios
        .get(`https://api.github.com/users/${this.state.user}/followers`)
        .then((res) => {
          console.log(res.data);
          this.setState({
            ...this.state,
            followers: [...res.data],
          });
        })
        .catch((err) => {
          console.error(err);
        });
      this.setState({
        ...this.state,
        user: "",
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      user: e.target.value,
    });
  };

  handleSearch = () => {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          userInfo: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    console.log("USERINFO: ", this.state.userInfo);
    console.log("FOLLOWERS: ", this.state.followers);
    console.log("USER: ", this.state.user);
    return (
      <div>
        <h1>GitHub Info</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.user}
        />
        <button onClick={this.handleSearch}>Search</button>
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
