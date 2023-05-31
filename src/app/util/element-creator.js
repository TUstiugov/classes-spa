/**
 * @typedef {{
 * tag: string,
 * classNames: Array<string>,
 * textContent: string,
 * callback: function
 * }} ElementParams
 */

export default class ElementCreator {
  /**
   * @param {ElementParams} param 
   */
  constructor(param) {
    this.element = null;
    this.createElement(param);
    this.setCssClasses(param.classNames);
    this.setTextContent(param.textContent);
    this.setCallback(param.callback);
  }

  /**
   * @param {ElementParams} param 
   */
  createElement(param) {
    this.element = document.createElement(param.tag);
  }

  /**
   * @returns {HTMLElement}
   */
  getElement() {
    return this.element;
  }

  /**
   * @param {Array<string>} cssClasses 
   */
  setCssClasses(cssClasses) {
    cssClasses.forEach((className) => this.element.classList.add(className));
  }

  /**
   * @param {string} text 
   */
  setTextContent(text) {
    this.element.textContent = text;
  }

  /**
   * @param {function} callback 
   */
  setCallback(callback) {
    if (typeof callback === 'function') {
      this.element.addEventListener('click', callback);
    }
  }
}
