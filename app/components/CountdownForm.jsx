import React from 'react';

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var secondsStr = this.refs.seconds.value;
    if(secondsStr.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(secondsStr, 10));
    }
  },
  render(){
    return(
      <div>
        <form ref="form" name="countForm" onSubmit={this.onSubmit} className="countdown-form" >
          <input type='text' ref="seconds" placeholder='Enter time in seconds'/>
          <button className="button expanded"></button>
        </form>
      </div>
    );
  }
});

export default CountdownForm;
