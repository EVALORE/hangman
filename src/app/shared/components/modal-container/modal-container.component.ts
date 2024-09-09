import { Component, inject } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-modal-container',
  standalone: true,
  imports: [NgTemplateOutlet, AsyncPipe],
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.scss',
})
export class ModalContainerComponent {
  private readonly modalService = inject(ModalService);

  protected content = this.modalService.content$;
}
