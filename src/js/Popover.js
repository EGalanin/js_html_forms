export default class Popover {
  constructor(element) {
    this.element = element;
    this.title = element.getAttribute('title');
    this.content = element.getAttribute('data-content');
    this.popover = this.createPopover();
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.classList.add('popover');

    const popoverTitle = document.createElement('div');
    popoverTitle.classList.add('popover-title');
    popoverTitle.textContent = this.content;
    popover.appendChild(popoverTitle);

    const popoverContent = document.createElement('div');
    popoverContent.classList.add('popover-content');
    popoverContent.textContent = this.content;
    popover.appendChild(popoverContent);

    return popover;
  }

  positionPopover() {
    this.element.parentElement.appendChild(this.popover);
    const { offsetTop: top, offsetLeft: left, offsetWidth: width } = this.element;
    this.popover.style.top = `${top - this.popover.offsetHeight - 5}px`;
    this.popover.style.left = `${left + width / 2 - this.popover.offsetWidth / 2}px`;
  }

  removePopover() {
    const currenrPopover = document.querySelector('.popover');
    if (currenrPopover) {
      currenrPopover.remove();
    }
  }
}
