import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectIdeas from "./ProjectIdeas";

class App extends Component {
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <img src={window.location.origin + '/hci.jpg'} width="200" height="100"></img>
          <h1 className="App-title">Human Computer Interaction Course Homepage</h1>
        </header>
        <p className="App-intro">
This is Monisha Karise's Homepage for CD 5430 (Human Computer Interaction)        </p>
      <ProjectIdeas/>
      </div>


    );
  }
}

export default App;
