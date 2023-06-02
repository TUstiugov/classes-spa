import './card.css';

import View from '../../../view';
import ElementCreator from '../../../../util/element-creator';

const CssCLasses = {
  CONTAINER: 'card',
  FIELD: 'card__field',
  BUTTON: 'card__button',
};
const CARD_TEXT_MORE = 'More...';

export default class CardView extends View {
  /**
   * @param {import('../../../../../data/cards').CardInfo} card 
   */
  constructor(card) {
    /**
     * @type {import('../../../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'article',
      classNames: [CssCLasses.CONTAINER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(card);
  }

  /**
   * @param {import('../../../../../data/cards').CardInfo} card 
   */
  configureView(card) {
    const paramsLabel = {
      tag: 'label',
      classNames: [CssCLasses.FIELD],
      textContent: card.name,
      callback: null,
    };
    const labelCreator = new ElementCreator(paramsLabel);

    const paramsButton = {
      tag: 'button',
      classNames: [CssCLasses.BUTTON],
      textContent: CARD_TEXT_MORE,
      callback: null,
    };
    const buttonCreator = new ElementCreator(paramsButton);

    this.elementCreator.addInnerElement(labelCreator);
    this.elementCreator.addInnerElement(buttonCreator);
  }
}
