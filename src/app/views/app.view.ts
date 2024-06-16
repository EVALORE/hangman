import { BaseComponent } from '@components/baseComponent';
import { GallowsComponent } from '@components/gallows';
import { KeyboardComponent } from '@components/keyboard';
import { ModalComponent } from '@components/modal';
import { QuizComponent } from '@components/quiz';
import { TriviaMetrics } from '@interfaces/TriviaMetrics';

export class AppView {
  private quizComponent = new QuizComponent();
  private keyboardComponent = new KeyboardComponent();
  private gallowsComponent = new GallowsComponent();
  private modalComponent = new ModalComponent();

  private appComponent = new BaseComponent({ classNames: ['app'] });

  initializeQuiz({ question, answer, currentAttempt, maxAttempts }: TriviaMetrics) {
    this.quizComponent.setQuestion(question);
    this.quizComponent.setAnswer(answer);
    this.quizComponent.setAttempts(currentAttempt, maxAttempts);
  }

  initializeGallows() {
    this.gallowsComponent.newDraw();
  }

  initializeKeyboard(keyHandler: (key: string) => void) {
    this.keyboardComponent.generateKeyboard(keyHandler);
  }

  initializeModal(modalButtonHandler: () => void) {
    this.modalComponent.setButtonFunction(modalButtonHandler);
  }

  updateAttempts(currentAttempt: number, maxAttempts: number) {
    this.quizComponent.setAttempts(currentAttempt, maxAttempts);
  }

  updateHiddenAnswer(answer: string) {
    this.quizComponent.setAnswer(answer);
  }

  updateDrawing(currentAttempt: number) {
    this.gallowsComponent.drawStep(currentAttempt);
  }

  showWinModal() {
    this.modalComponent.setModalText('You Win!');
    this.appComponent.insertChildren(this.modalComponent);
  }

  showLoseModal() {
    this.modalComponent.setModalText('You Lose!');
    this.appComponent.insertChildren(this.modalComponent);
  }

  resetComponents(quizData: TriviaMetrics) {
    this.gallowsComponent.newDraw();
    this.keyboardComponent.reset();
    this.initializeQuiz(quizData);
    this.modalComponent.removeNode();
  }
  render() {
    this.appComponent.insertChildren(
      this.gallowsComponent,
      this.quizComponent,
      this.keyboardComponent,
    );

    return this.appComponent.getNode();
  }
}
