/* eslint-disable */

import React from 'react';
import View from './View';
import {get} from 'lodash';


export default class landingView extends View {


  constructor(props) {
    super(props);

    this.nextState = this.nextState.bind(this);

    this.state = {};
  }

    nextState(state) {
    this.next(this.steps[state]);
  }

  render() {

    return (
      <div className="slide">
          <h1>Welcome {get(this,'event.from.userName')} To Intuit Company This is you Landing Page</h1>
        <hr/>
          <button key='Logout' onClick={()=>this.nextState('LOGIN')}>Logout</button>
          <button key='Next Page' onClick={()=>this.nextState('MainView')}>Main Page</button>
      </div>
    );
  }
}
