import React from 'react';
import Clock from 'Clock';

const Countdown = React.createClass({
  render(){
    return(
      <div>
        Countdown
        <Clock totalSeconds={145}/>
      </div>
    )
  }
});

export default Countdown;
