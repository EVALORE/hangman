import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  TemplateRef,
  untracked,
  viewChild,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Key, KeyboardComponent } from './components/keyboard/keyboard.component';
import { QuizService } from '../core/services/quiz.service';
import { QuizStatus } from '../shared/enums/quiz-status';
import { MAX_GUESS_ATTEMPTS } from '../shared/constants/max-guess-attempts';
import { toSignal } from '@angular/core/rxjs-interop';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { ModalService } from '../core/services/modal.service';
import { ModalController } from '../core/services/modal-controller';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [AsyncPipe, KeyboardComponent, ModalComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
  providers: [QuizService],
})
export class QuizComponent implements OnInit {
  private readonly quizService = inject(QuizService);
  private readonly modalService = inject(ModalService);
  private readonly destroyRef = inject(DestroyRef);

  private keyboard = viewChild.required(KeyboardComponent);
  private winModal = viewChild.required<TemplateRef<Component>>('win');
  private loseModal = viewChild.required<TemplateRef<Component>>('lose');

  private quizStatus = toSignal(this.quizService.quizStatus$);

  protected question = this.quizService.question;
  protected answer = this.quizService.hiddenAnswer;

  protected isInProgress = computed(() => this.quizStatus() === QuizStatus.IN_PROGRESS);
  protected incorrectGuesses = computed(
    () => `${this.quizService.incorrectGuesses().toString()} / ${MAX_GUESS_ATTEMPTS.toString()}`,
  );

  protected modalController$?: ModalController;

  constructor() {
    effect(() => {
      const status = this.quizStatus();

      if (status === QuizStatus.WON) {
        this.openModal(untracked(this.winModal));
      }

      if (status === QuizStatus.LOST) {
        this.openModal(untracked(this.loseModal));
      }
    });
  }

  protected startNewQuiz(): void {
    this.quizService.getQuiz();
    this.keyboard().resetKeys();
    this.closeModal();
  }

  protected pressKey(keys: Key[]): void {
    this.quizService.processKeys(keys);
  }

  private openModal(content: TemplateRef<Component>): void {
    this.modalController$ = this.modalService.addItem({ content });
    this.modalController$.open().subscribe();
  }

  private closeModal(): void {
    this.modalController$?.close();
  }

  public ngOnInit(): void {
    this.quizService.getQuiz();
  }
}
