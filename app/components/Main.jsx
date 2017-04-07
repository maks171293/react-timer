import React from 'react';
import Navigation from 'Navigation';

let Main = (props) => {
  return(
    <div>
      <div>
        <Navigation />
        <p>Main component</p>
          {props.children}
      </div>
    </div>
  )
};

export default Main;
