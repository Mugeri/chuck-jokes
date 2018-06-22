import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, PanelGroup, Glyphicon } from 'react-bootstrap';
import * as fetch from '../actions/fetch';
import logo from '../assets/logo.svg';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.panelToExpand = this.panelToExpand.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleSelect = (activeKey) => {
    this.setState({ activeKey });
  }

  panelToExpand = (category) => {
    const content = this.props.content ? this.props.content.value : null;
    const cat = this.props.categories;
    const index = this.props.index;
    if (cat[index] === category) {
      return (<p> {this.props.content.value} </p>);
    }
    return null;
  }
  onCategories = () => {
    return this.props.categories.map((category, index) => {
      return  (
          <Panel className="Panel-primary" eventKey={index} onClick={() => this.props.fetchContent(category, index)}>
            <Panel.Heading className="Panel-heading">
              <Glyphicon glyph="chevron-up" />
              <Panel.Title className="Panel-title" toggle>{category}</Panel.Title>
            </Panel.Heading>
            <Panel.Body className="Panel-body" collapsible>
            { this.props.content && this.panelToExpand(category) }
            </Panel.Body>
          </Panel>
        );
      });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img
        className="App-logo"
        src='https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png'
        />
          <h1 className="App-title">CHUCK NORRIS JOKES</h1>
        </header>
        <PanelGroup
          accordion
          className="Panel-group"
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
        {this.props.categories && this.onCategories()}
        </PanelGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.fetch.categories,
    content: state.fetch.content,
    index: state.fetch.index,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(fetch, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
