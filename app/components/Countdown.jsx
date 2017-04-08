import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

const Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0
    }
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds
    })
  },
  render(){
    let {count} = this.state;
    return(
      <div>
        Countdown
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

export default Countdown;
