import Element from './element';

document.querySelectorAll('.button').forEach((el) => {
  const element = new Element(el);
  element.init();
});
