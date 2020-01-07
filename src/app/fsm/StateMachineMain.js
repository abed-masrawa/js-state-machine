/* eslint-disable */
import EventEmitter from 'events';
import {get} from 'lodash';


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
        this.go = this.go.bind(this);
        this.next = this.next.bind(this);


    }

    go({newStep, firstState}) {
        this.newStep = newStep;
        this.next(new Step({
            name: 'firstState',
            to: firstState,
            from: null
        }));

    }


    next(step) {
        if (!step) {
            return;
        }

        step.from = this.currentState;

        this.currentState = step.to;

        let evt = new StateEvent({
            model: this.model,
            state: this.currentState,
            next: this.next,
            from: step.from
        });

        const view = get(this, 'currentState.view');
        if (view) {
            this.newStep.handleEvent(evt);
        }

    }

}

export default StateMachineMain;
