import '../style.css';
import HeaderView from './view/header/header-view';
import FooterView from './view/footer/footer-view';
import MainView from './view/main/main-view';
import IndexView from './view/main/index/index-view';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const mainView = new MainView();
    const headerView = new HeaderView(mainView);
    const footerView = new FooterView();

    document.body.append(headerView.getHtmlElement(),
      mainView.getHtmlElement(),
      footerView.getHtmlElement());
  }
}
