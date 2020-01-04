/* eslint-disable */

import React, {Component} from 'react';
import {get} from 'lodash';

class View extends Component {

    constructor(props) {
        super(props);

        this.event = props.event;
        this.model = props.event.model;
        this.next = props.event.next;
        this.error = props.event.error;
        this.transitions = props.event.state.transitions;
    }
}

export default View;
