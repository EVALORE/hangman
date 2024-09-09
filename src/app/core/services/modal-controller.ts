import { finalize, Observable, Subject } from 'rxjs';

export class ModalController {
  private readonly modalController$ = new Subject<void>();

  constructor(private readonly removeItemCallback: () => void) {}

  public open(): Observable<void> {
    return this.modalController$.pipe(
      finalize(() => {
        this.removeItemCallback();
      }),
    );
  }

  public close(): void {
    this.modalController$.next();
    this.modalController$.complete();
  }
}
