/**
 * @jest-environment jsdom
 */

import Popover from '../Popover';

describe('Popover class', () => {
  let popover;
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    const button = document.createElement('button');
    button.setAttribute('title', 'Popover title');
    button.setAttribute('data-content', 'Popover content');
    container.appendChild(button);
    popover = new Popover(button);
  });

  afterEach(() => {
    popover.removePopover();
    container.remove();
  });

  test('Create popover', () => {
    popover.positionPopover();
    const popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeTruthy();
  });

  test('Remove popover', () => {
    popover.positionPopover();
    popover.removePopover();
    const popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeFalsy();
  });
});
