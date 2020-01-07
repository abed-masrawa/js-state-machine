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
            <div>
                <p>Welcome <b className='userName'> {get(this, 'event.from.userName')}</b> To Intuit Company This is you
                    Landing Page</p>
                <hr/>
                <button key='Logout' onClick={() => this.nextState('LOGIN')}>Logout</button>
                <button key='Next Page' onClick={() => this.nextState('MainView')}>Main Page</button>
            </div>
        );
    }
}
