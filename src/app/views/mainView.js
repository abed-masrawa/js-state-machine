/* eslint-disable */

import React from 'react';
import View from './View';
import {get} from 'lodash';

export default class MainView extends View {


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
                <header>
                    <h1>{get(this,'event.state.label')}  </h1>

                </header>
                <main>
                    <article>
                        <h3 class="title">intuit Inc. </h3>
                        <p>intuit Inc. is an American business and financial software company that develops and sells
                            financial, accounting, and tax preparation software and related services for small
                            businesses, </p>
                        <p>accountants, and individuals. The company is headquartered in Mountain View, California.
                            Wikipedia</p>
                    </article>
                </main>

                <footer>
                    <button key='Logout' onClick={() => this.nextState('LOGIN')}>Logout</button>
                    <button key='Landing' onClick={() => this.nextState('LANDING')}>Landing Page</button>

                </footer>

            </div>


        );
    }
}
