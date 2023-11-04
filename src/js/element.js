import Popover from './Popover';

export default class Element {
  constructor(element) {
    this.element = element;
    this.popover = new Popover(element);
    this.isPopoverVisible = false;
  }

  init() {
    this.element.addEventListener('click', this.togglePopover.bind(this));
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  togglePopover() {
    if (this.isPopoverVisible) {
      this.popover.removePopover();
    } else {
      this.popover.positionPopover();
    }
    this.isPopoverVisible = !this.isPopoverVisible;
  }

  onDocumentClick(e) {
    if (!this.element.contains(e.target)) {
      this.popover.removePopover();
      this.isPopoverVisible = false;
    }
  }
}
