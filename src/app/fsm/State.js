
export default class State {
    constructor({name, transitions: steps,label}) {
        this.name = name;
        this.label = label;
        this.stepsMap = {};
        if (!!steps) {
            steps.forEach(transition => this.transitions[transition.name] = transition);
        }
    }

    set transitions(transitions) {
        if (!!transitions) {
            transitions.forEach(transition => this.transitions[transition.name] = transition);
        }
    }

    get transitions() {
        return this.stepsMap;
    }
}
