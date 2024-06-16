import { BaseComponent } from './baseComponent';
import { type BaseComponentProps } from '@interfaces/BaseComponentProps';

interface ButtonProps extends Omit<BaseComponentProps, 'tagName'> {
  eventHandler?: (event?: MouseEvent) => void;
}

export class ButtonComponent extends BaseComponent<'button'> {
  constructor({ classNames, textContent, eventHandler }: ButtonProps) {
    super({
      tagName: 'button',
      classNames,
      textContent,
    });

    if (eventHandler) this.addListener('click', eventHandler);
  }

  public enable(): void {
    this.removeAttribute('disabled');
  }

  public disable(): void {
    this.setAttribute('disabled', 'true');
  }
}
