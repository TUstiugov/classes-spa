import './header.css';

import View from '../view';

const CssClasses = {
  HEADER: 'header',
  NAV: 'nav',
};

export default class HeaderView extends View {
  constructor() {
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
  }
}
