
import React from 'react';
import StateMachineMain from './StateMachineMain';
import {get} from 'lodash';


class StateMachineSteps extends React.Component {


  constructor(props) {
    super(props);

    this.stateMachine = new StateMachineMain({
      model: props.model
    });


    this.state = {
      view: null,
      event: null
    };

    this.handleEvent = this.handleEvent.bind(this);

   }

    componentDidMount() {
        this.setState({
            view: null,
        }, () => {
            this.stateMachine.go({newStep: this, firstState: this.props.firstState});
        });


  }

  componentWillUnmount() {
    this.setState(null);
  }

  handleEvent(event) {
    this.setState({
      view: event.state.view,
      event: event
    });
  }



  render() {

    const View = this.state.view;
    if (!View) return null;

    const {event} = this.state;
    const name =  get(event,'state.name') ;


    return (
      <div  >
          <div key={name}>
            <View event={event}/>
          </div>
      </div>
    );
  }
}
export default StateMachineSteps;
