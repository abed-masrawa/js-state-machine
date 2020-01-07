/* eslint-disable */

import React, {Component} from 'react';

class View extends Component {

    constructor(props) {
        super(props);

        this.event = props.event;
        this.model = props.event.model;
        this.next = props.event.next;
        this.error = props.event.error;
        this.steps = props.event.state.steps;
    }
}

export default View;
