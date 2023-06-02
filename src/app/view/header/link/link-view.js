import './link.css';

import View from '../../view';

const CssClasses = {
  ITEM: 'nav-item',
  ITEM_SELECTED: 'nav-item__selected',
};

export default class LinkView extends View {
  /**
   * @param {import('../header-view').Page} pageParam
   * @param {Array<LinkView>} linkElements
   */
  constructor(pageParam, linkElements) {
    /**
     * @type {import('../../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'a',
      classNames: [CssClasses.ITEM],
      textContent: pageParam.name,
      callback: pageParam.callback,
    };

    super(params);

    this.linkElements = linkElements;

    this.configureView();
  }

  setSelectedStatus() {
    this.linkElements.forEach((linkElement) => linkElement.setNotSelectedStatus());

    const element = this.elementCreator.getElement();
    element.classList.add(CssClasses.ITEM_SELECTED);
  }

  setNotSelectedStatus() {
    const element = this.elementCreator.getElement();
    element.classList.remove(CssClasses.ITEM_SELECTED);
  }

  configureView() {
    const element = this.elementCreator.getElement();
    element.addEventListener('click', this.setSelectedStatus.bind(this));
  }
}
