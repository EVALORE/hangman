import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from './modal-controller';

export interface ModalItem {
  content: TemplateRef<unknown>;
  context?: Record<string, unknown>;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly content$$ = new BehaviorSubject<ModalItem[]>([]);

  public readonly content$ = this.content$$.asObservable();

  public addItem(content: ModalItem): ModalController {
    const currentContent = this.content$$.getValue();
    this.content$$.next([...currentContent, content]);

    return new ModalController(this.removeItem.bind(this, content));
  }

  public removeItem(content: ModalItem): void {
    const filteredContent = this.content$$.getValue().filter((item) => item !== content);
    this.content$$.next(filteredContent);
  }
}
