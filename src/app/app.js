import '../style.css';
import HeaderView from './view/header/header-view';
import FooterView from './view/footer/footer-view';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const headerView = new HeaderView();
    const footerView = new FooterView();

    document.body.append(headerView.getHtmlElement(), footerView.getHtmlElement());
  }
}
