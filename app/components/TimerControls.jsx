let React = require('react');

let TimerForm = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  handleStatusChange: function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus)
    }
  },
  render(){
    let {timerStatus} = this.props;

    let renderTimerControls = () => {
      if(timerStatus === 'started'){
        return <button className='button' onClick={this.handleStatusChange('paused')}>Pause</button>
      }else{
        return <button className='button' onClick={this.handleStatusChange('started')}>Start</button>
      }
    };
    return(
      <div className='controls'>
          {renderTimerControls()}
          <button className='button alert' onClick={this.handleStatusChange('stopped')}>Stop</button>
      </div>
    )
  }
});

module.exports = TimerForm;
