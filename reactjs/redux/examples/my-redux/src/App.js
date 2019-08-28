import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Counter from './Counter';


class App extends React.Component {
  render() {
    return(
      <Counter/>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

// const mapDispatchToProps = dispatch => ({
//   startAction: () => dispatch(startAction),
//   stopAction: () => dispatch(stopAction)
// });

export default connect(mapStateToProps)(App);