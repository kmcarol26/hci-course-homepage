import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectIdeas from "./ProjectIdeas";

// class Router extends React.Component{}
// render(
// return(
//     <BrowserRouter>
//     <Route path="/assignment1"component={ProjectIdeas}/>
// </BrowserRouter>
// // document.getElementById('root')
// );

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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Human Computer Interaction Course Homepage</h1>
        </header>
        <p className="App-intro">
This is the Homepage for CD 5430 (Human Computer Interaction)        </p>
      <ProjectIdeas/>
      </div>


    );
  }
}

export default App;
