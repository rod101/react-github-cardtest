import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  		{name: "johnpapa", avatar_url: "https://avatars2.githubusercontent.com/u/1202528?v=4", company: "JohnPapa.net, LLC"},
	];


const CardList = (props) => (
  <div>

  {/* this is the simple way todo it
   <Card {...testData[0]} />
  <Card {...testData[1]} />
  */}
{/*Cleaning up code, rewrite */}
{testData.map(profile => <Card {...profile}/>)}


  </div>
)

class Card extends React.Component {
  render(){
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


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <CardList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
