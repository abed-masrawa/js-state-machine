/* eslint-disable */

import React from 'react';
import View from './View';
import {get} from 'lodash';


export default class loginView extends View {

    constructor(props) {
        super(props);
        this.openState = this.openState.bind(this);
        this.loading = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.event.state.userName = null;

    }

    openState(state) {
        let userName = get(this, 'event.state.userName');
        if (!userName) {
            alert('please enter userName');
            return;
        }
        this.loading.current.style.display = 'block';

        setTimeout(() => {
            this.loading.current.style.display = 'hidden';

            this.next(this.steps[state]);

        }, 500);

    }

    handleChange(event) {
        this.event.state.userName = event.target.value;
    }

    render() {
        return (

            <div className="login-form">
                <label htmlFor="yourName">
                    <h2>Login to your account</h2>
                    <input
                        id="yourName"
                        name="yourName"
                        type="text"
                        onChange={this.handleChange}
                    />
                </label>
                <input

                    type="submit"
                    value='Login'
                    onClick={() => this.openState('LANDING')}
                />
                <div ref={this.loading} className="loader"></div>
            </div>


        );
    }
}
