import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from "./redux/actions/actions";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        {this.props.loading && (
          <div><img src={logo} alt="loading" className="App-logo" /></div>
        )}
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  age: state.age,
  loading: state.loading
});

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
