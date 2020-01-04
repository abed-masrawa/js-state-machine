/* eslint-disable */
import EventEmitter from 'events';
import ActionState from './State';
import ViewState from './ViewState';

class StateEvent {
    constructor({state, next, model, from}) {
        this.state = state;
        this.next = next;
        this.model = model;
        this.from = from;
    }
}

export class Step extends EventEmitter {
    constructor({name, from, to}) {
        super();
        this.name = name;
        this.from = from;
        this.to = to;

    }
}

class StateMachineMain extends EventEmitter {

    constructor(model) {
        super();
        this.model = model;
        this.start = this.start.bind(this);
        this.next = this.next.bind(this);


    }

    start({slider, initialState}) {
        this.slider = slider;
        this.next(new Step({
            name: 'initialState',
            to: initialState,
            from: null
        }));

    }


    next(transition) {
        if (!transition) {
            return;
        }

        transition.from = this.currentState;

        this.currentState = transition.to;

        let evt = new StateEvent({
            model: this.model,
            state: this.currentState,
            next: this.next,
            from: transition.from
        });

        if (this.currentState instanceof ViewState) {
            const view = this.currentState.view;
            if (view) {
                this.slider.handleEvent(evt);
            }
        } else if (this.currentState instanceof ActionState) {
            const action = new this.currentState.action();
            if (action) {
                action.handleEvent(event);
            }
        }
    }

}

export default StateMachineMain;
