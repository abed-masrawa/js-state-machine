
export default class State {
    constructor({name, steps: steps,label}) {
        this.name = name;
        this.label = label;
        this.stepsMap = {};
        if (steps) {
            steps.forEach(step => this.steps[step.name] = step);
        }
    }

    set steps(steps) {
        if (steps) {
            steps.forEach(step => this.steps[step.name] = step);
        }
    }

    get steps() {
        return this.stepsMap;
    }
}
