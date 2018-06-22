import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as fetch from '../actions/fetch';
import logo from '../assets/logo.svg';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  onCategories = () => {
    return this.props.categories.map(category => {
      return <a href='#' onClick={() => this.props.fetchContent(category)}> {category} </a>
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CHUCK NORRIS JOKES</h1>
        </header>
        {this.props.categories && this.onCategories()}
        {this.props.content && <p> {this.props.content.value} </p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.fetch.categories,
    content: state.fetch.content
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(fetch, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
