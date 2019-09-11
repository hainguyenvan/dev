import React from 'react';
import { connect } from 'react-redux';

let styles = {
  backgroundColor: 'HotPink ',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hover: false };
    }

    onClick = () => {
      console.log('onClick Button ...');
      this.props.dispatch({type: 'GET_NEWS'});
    }

    render() {
      return (
        <button style={ styles}
          onClick={this.onClick}
        >Press to see News</button>
      );
    }
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Button);