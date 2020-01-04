
import State from './State';


export default class ViewState extends State {
  constructor({name, view, transitions,label}) {
    super({name: name, transitions: transitions,label: label});
    this.view = view;
   }
}
