
import State from './State';


export default class ViewState extends State {
  constructor({name, view, steps,label}) {
    super({name: name, steps: steps,label: label});
    this.view = view;
   }
}
