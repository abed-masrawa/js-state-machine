/* eslint-disable */

import React, {Component} from 'react';


import StateMachineSteps from './fsm/StateMachineSteps';
import {Step} from './fsm/StateMachineMain';

///////////////////
/// VIEWS  ////////
//////////////////

import Login from './views/loginView';
import Landing from './views/LandingView';
import Main from './views/mainView';



export  class StateModel {
  constructor({name, steps: steps,label}) {
    this.name = name;
    this.label = label;
    this.stepsMap = {};
    if (steps) {
      steps.forEach(step => this.steps[step.name] = step);
    }
  }

  set steps(steps) {
    if (steps) {
      steps.forEach(step => this.steps[step.name] = step);
    }
  }

  get steps() {
    return this.stepsMap;
  }
}


export  class Display extends StateModel {
  constructor({name, view, steps,label}) {
    super({name: name, label: label,steps: steps});
    this.view = view;
  }
}


export  const  StepTypes = {
  LANDING: 'LANDING',
  Main: 'MainView',
  LOGIN: 'LOGIN',

};



const loginState = new Display({
  name: ' Login Page ',
  view: Login,
  label:'Welcome to The Login Page'

});


const landingState = new Display({
  name: 'Landing View',
  view: Landing,
  label:'Welcome to The Landing Page'
});

const mainState = new Display({
  name: 'Main page',
  view: Main,
  label:'Welcome to  The  Main Page'
});





loginState.steps = [
  new Step({
    name: StepTypes.LANDING,
    to: landingState,

  }),

  new Step({
    name: StepTypes.Main,
    to: mainState,

  })
];

landingState.steps = [

  new Step({
    name: StepTypes.LOGIN,
    to: loginState,

  }),
  new Step({
    name: StepTypes.Main,
    to: mainState,

  }),

];


mainState.steps = [

  new Step({
    name: StepTypes.LOGIN,
    to: loginState,

  }),
  new Step({
    name: StepTypes.LANDING,
    to: landingState,

  }),

];




class App extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    const stateMachineProps = {
      model: this.state,
      firstState: loginState,

    };
    return (
      <div>
        <StateMachineSteps {...stateMachineProps} />
      </div>
    );
  }
}

export default App;
