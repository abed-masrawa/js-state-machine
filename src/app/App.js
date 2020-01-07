/* eslint-disable */

import React, {Component} from 'react';


import StateMachineSteps from './fsm/StateMachineSteps';
import ViewState from './fsm/ViewState';
import {Step} from './fsm/StateMachineMain';


import Login from './views/loginView';
import Landing from './views/LandingView';
import Main from './views/mainView';




export  const  StepTypes = {
  LANDING: 'LANDING',
  Main: 'MainView',
  LOGIN: 'LOGIN',

};



const loginState = new ViewState({
  name: ' Login Page ',
  view: Login,
  label:'Welcome to  Login Page'

});


const landingState = new ViewState({
  name: 'Landing View',
  view: Landing,
  label:'Welcome to  Landing Page'
});

const mainState = new ViewState({
  name: 'Main page',
  view: Main,
  label:'Welcome to  Main Page'
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
