import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from './actions/fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onButtonClick = (event) => {
    console.log('I AM CALLED', event);
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="App">
      <pre>
       {
        JSON.stringify(this.props)
       }
      </pre>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onButtonClick}> Test Redux action </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
