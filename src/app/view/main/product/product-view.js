import './product.css';

import View from '../../view';
import cardsInfo from '../../../../data/cards';
import CardView from './card/card-view';

const CssClasses = {
  PRODUCT: 'product',
};

export default class ProductView extends View {
  constructor() {
    /**
     * @type {import('../../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'section',
      classNames: [CssClasses.PRODUCT],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView();
  }

  configureView() {
    cardsInfo.forEach((card) => {
      const cardView = new CardView(card);

      this.elementCreator.addInnerElement(cardView.getHtmlElement());
    });
  }
}
