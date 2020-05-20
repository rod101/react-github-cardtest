import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

// Test Data

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook"
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu"
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook"
  },
  {
    name: "johnpapa",
    avatar_url: "https://avatars2.githubusercontent.com/u/1202528?v=4",
    company: "JohnPapa.net, LLC"
  }
];

const CardList = props => (
  <div>
    {/* this is the simple way todo it
   <Card {...testData[0]} />
  <Card {...testData[1]} />
  */}
    {/*Cleaning up code, rewrite */}
    {props.profile.map(profile => (
      <Card {...profile} />
    ))}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  // userNameInput = React.createRef(); // no more useing ref
  state = {
    userName: ''
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.userName);

    // using ref
  //   console.log(this.userNameInput.current.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
          placeholder="Github username"
          //ref={this.userNameInput} // there is a better way to do this
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData
    };
  }

  render() {
    return (
      <div>
        <h1>The GitHub Card App</h1>
        <Form />
        <CardList profile={this.state.profiles} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
