import { BaseComponent } from './baseComponent';
import { ButtonComponent } from './button';

export class ModalComponent extends BaseComponent {
  private button = new ButtonComponent({
    textContent: 'Play Again',
  });
  private modalText = new BaseComponent({
    classNames: ['modal-text'],
  });

  constructor() {
    super({ classNames: ['modal'] });
    this.insertChildren(this.modalText, this.button);
  }

  public setButtonFunction(eventHandler: () => void): void {
    this.button.addListener('click', eventHandler);
  }

  public setModalText(text: string) :void {
    this.modalText.setContent(text);
  }

  public clearModal(): void {
    this.button.removeNode();
    this.modalText.removeNode();
  }
}
