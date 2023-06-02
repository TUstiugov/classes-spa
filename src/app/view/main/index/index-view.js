import './index.css';

import View from '../../view';
import InputFieldCreator from '../../../util/input-field/input-field-creator';

const CssClasses = {
  INDEX: 'index',
};
const FIELD_TEXT_ONE = 'Text input 1';
const FIELD_TEXT_TWO = 'Text input 2';

export default class IndexView extends View {
  constructor() {
    /**
     * @type {import('../../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'section',
      classNames: [CssClasses.INDEX],
      textContent: '',
      callback: null,
    };

    super(params);

    this.firstField = '';
    this.secondField = '';

    this.configureView();
  }

  configureView() {
    let paramsInput = {
      tag: 'input',
      classNames: [],
      textContent: FIELD_TEXT_ONE,
      callback: (event) => this.changeEventHandler(event, 'firstField'),
    };
    let inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());

    paramsInput = {
      tag: 'input',
      classNames: [],
      textContent: FIELD_TEXT_TWO,
      callback: (event) => this.changeEventHandler(event, 'secondField'),
    };
    inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());
  }

  /**
   * @param {InputEvent} event
   * @param {string} fieldName
   */
  changeEventHandler(event, fieldName) {
    if (event.target instanceof HTMLInputElement) {
      this[fieldName] = event.target.value;
    }
  }
}
