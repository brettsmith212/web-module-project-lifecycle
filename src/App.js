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
    axios
      .get("https://api.github.com/users/brettsmith212")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("https://api.github.com/users/brettsmith212/followers")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        Github Card
        <div>
          <User />
        </div>
        <div>
          <FollowerList />
        </div>
      </div>
    );
  }
}

export default App;
