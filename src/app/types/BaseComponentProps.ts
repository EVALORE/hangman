export interface BaseComponentProps<K extends keyof HTMLElementTagNameMap = 'div'> {
  tagName?: K;
  classNames?: string[];
  textContent?: string;
}
