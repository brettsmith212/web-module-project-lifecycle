import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import axios from "axios";
import styled from "styled-components";

const AppContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;

  input {
    font-size: 1.2rem;
    width: 20rem;
  }

  button {
    padding: 0.4rem;
    border-radius: 10px;
    margin-left: 0.8rem;
    font-size: 1rem;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: gray;
  }
`;

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
    user: "",
    userInfo: {
      login: "",
      avatar_url: "",
      followers: 0,
      public_repos: 0,
    },
    followers: [],
    // userInfo: userData,
    // followers: followerData,
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/brettsmith212`)
      .then((res) => {
        // console.log(res.data);
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
    if (prevState.userInfo.login !== this.state.userInfo.login) {
      axios
        .get(
          `https://api.github.com/users/${this.state.userInfo.login}/followers`
        )
        .then((res) => {
          // console.log(res.data);
          this.setState({
            ...this.state,
            followers: [...res.data],
          });
        })
        .catch((err) => {
          console.error(err);
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
        // console.log(res.data);
        this.setState({
          ...this.state,
          userInfo: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    this.setState({
      ...this.state,
      user: "",
    });
  };

  render() {
    // console.log("USERINFO: ", this.state.userInfo);
    // console.log("FOLLOWERS: ", this.state.followers);
    // console.log("USER: ", this.state.user);
    return (
      <AppContainer>
        <div>
          <h1>GitHub Info</h1>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.user}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div>
          <User userInfo={this.state.userInfo} />
        </div>
        <div>
          <FollowerList followers={this.state.followers} />
        </div>
      </AppContainer>
    );
  }
}

export default App;
