import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    // state = { count: 0 }

    increment = () => {
        console.log('increment ...');
        this.props.dispatch({ type: 'INCREMENT' });
        // this.setState({
        //     count: this.state.count + 1
        // });
    }

    decrement = () => {
        console.log('decrement ...');
        this.props.dispatch({ type: 'DECREMENT' });
        // this.setState({
        //     count: this.state.count - 1
        // })
    }

    render() {
        return ( 
        <div>
            <h2>Counter</h2>
            <div>
              <button onClick={this.decrement}>-</button>
              <span>{this.props.count}</span>
              <button onClick={this.increment}>+</button>
            </div>
          </div>
        )
    }
}


const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps)(Counter);