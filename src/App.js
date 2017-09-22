import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlatButton from 'material-ui/FlatButton'; // v0.x
import Button from 'material-ui-next/Button';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Button>Beta Button</Button>
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <FlatButton>Flat Button</FlatButton>
          </MuiThemeProvider>
        </p>
      </div>
    );
  }
}

export default App;


//yarn add material-ui@latest
//yarn add material-ui-next@npm:material-ui@next
//yarn add react@next react-dom@next

