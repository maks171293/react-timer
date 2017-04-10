import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
var $ = require('jquery/dist/jquery.min.js');
import Timer from 'Timer';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on it started status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.onStatusChange('started');
    expect(timer.state.timer).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.timer).toBe(1);
      done()
    }, 1001);
  });
});
