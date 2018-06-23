import React, { Component } from "react";
import { Image, Panel, PanelGroup } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import chevronDown from "../assets/chevron-down.svg";
import chevronUp from "../assets/chevron-up.svg";
import * as fetch from "../actions/fetch";
import "../css/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: null
    };
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleSelect = activeKey => {
    this.setState({ activeKey });
  };

  // This is necessary for the first expansion of a category accordion.
  handleTitleClick = (category, index) => {
    this.handleSelect(index);
    this.props.fetchContent(category, index);
  };

  handlePanelExpansion = category => {
    const cat = this.props.categories;
    const index = this.props.index;
    if (cat[index] === category) {
      return <p>{this.props.content.value}</p>;
    }
    return null;
  };

  onCategorySelect = () => {
    const { categories, content, isLoading } = this.props;

    const { activeKey } = this.state;

    return categories.map((category, index) => (
      <Panel className="Panel-primary" eventKey={index}>
        <Panel.Heading className="Panel-heading">
          <Panel.Title
            className="Panel-title"
            onClick={() => this.handleTitleClick(category, index)}
          >
            <a>
              {isLoading && activeKey === index
                ? "loading..."
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </a>
          </Panel.Title>
          <Panel.Toggle className="Panel-toggle">
            {activeKey !== index ? (
              <Image src={chevronDown} responsive />
            ) : (
              <Image src={chevronUp} responsive />
            )}
          </Panel.Toggle>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body className="Panel-body" collapsible>
            {activeKey === index &&
              content &&
              this.handlePanelExpansion(category)}
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    ));
  };

  render() {
    const { activeKey } = this.state;
    const { categories } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Image
            className="App-logo"
            src="https://assets.chucknorris.host/img/chucknorris_logo_coloured_small@2x.png"
          />
          <h1 className="App-title">CHUCK NORRIS JOKES</h1>
        </header>
        <PanelGroup
          id="jokes-categories"
          accordion
          className="Panel-group"
          activeKey={activeKey}
          onSelect={this.handleSelect}
        >
          {categories && this.onCategorySelect()}
        </PanelGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.fetch.categories,
  content: state.fetch.content,
  index: state.fetch.index,
  isLoading: state.fetch.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators(fetch, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
