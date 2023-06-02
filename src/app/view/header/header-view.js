import './header.css';

import View from '../view';
import ElementCreator from '../../util/element-creator';
import LinkView from './link/link-view';
import IndexView from '../main/index/index-view';
import ProductView from '../main/product/product-view';

const CssClasses = {
  HEADER: 'header',
  NAV: 'nav',
};
const NamePages = {
  MAIN: 'Main',
  CARDS: 'Cards',
};
const START_PAGE_INDEX = 0;

/**
 * @typedef {{ name: string, callback: function }} Page
 */
export default class HeaderView extends View {
  /**
   * @param {import('../main/main-view').default} mainComponent 
   */
  constructor(mainComponent) {
    /**
     * @type {import('../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.linkElements = [];

    this.configureView(mainComponent);
  }

  /**
   * @param {import('../main/main-view').default} mainComponent 
   */
  configureView(mainComponent) {
    const paramsNav = {
      tag: 'nav',
      classNames: [CssClasses.NAV],
      textContent: '',
      callback: null,
    };
    const creatorNav = new ElementCreator(paramsNav);
    this.elementCreator.addInnerElement(creatorNav);

    const pages = this.getPages(mainComponent);
    pages.forEach((page, index) => {
      const linkElement = new LinkView(page, this.linkElements);
      creatorNav.addInnerElement(linkElement.getHtmlElement());
      this.linkElements.push(linkElement);

      if (START_PAGE_INDEX === index) {
        page.callback();
        linkElement.setSelectedStatus();
      }
    });
  }

  /**
   * @param {import('../main/main-view').default} mainComponent
   * @returns {Array<Page>}
   */
  getPages(mainComponent) {
    const indexView = new IndexView();
    const productView = new ProductView();

    const pages = [
      {
        name: NamePages.MAIN,
        callback: () => mainComponent.setContent(indexView),
      },
      {
        name: NamePages.CARDS,
        callback: () => { mainComponent.setContent(productView) },
      },
    ];

    return pages;
  }
}
