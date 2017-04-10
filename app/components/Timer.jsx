import React from 'react';
import Clock from 'Clock';
import TimerControls from 'TimerControls';

let Timer = React.createClass({
  getInitialState: function(){
    return {
      timer: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({timer: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
      }
    }
  },
  ComponentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      let newTimer = this.state.timer + 1;
      this.setState({timer: newTimer})
    }, 1000);
  },
  onStatusChange: function(newStatus){
    this.setState({
      timerStatus: newStatus
    })
  },
  render(){
    let {timer, timerStatus} = this.state;
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={timer}/>
        <TimerControls timerStatus={timerStatus} onStatusChange={this.onStatusChange}/>
      </div>
    )
  }
});

export default Timer;
