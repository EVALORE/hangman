import { type AppService } from '../services/app.service';
import { type AppView } from '../views/app.view';

export class AppController {
  constructor(
    private view: AppView,
    private service: AppService,
  ) {
    this.view.initializeGallows();
    this.view.initializeQuiz(this.service.triviaMetrics);
    this.view.initializeKeyboard(this.handlePlayerGuess);
    this.view.initializeModal(this.handleNewGame);
  }

  private handleWrongGuess() {
    this.view.updateDrawing(this.service.currentAttempt);
    this.service.incrementAttempts();
    this.view.updateAttempts(this.service.currentAttempt, this.service.maxAttempts);
  }

  private handleRightGuess() {
    this.view.updateHiddenAnswer(this.service.hiddenAnswer);
  }

  private shouldEndGame() {
    if (this.service.isCorrectAnswer) this.view.showWinModal();
    if (this.service.isMaxAttemptsReached) this.view.showLoseModal();
  }

  private handleNewGame = () => {
    this.service.newCurrent();
    this.view.resetComponents(this.service.triviaMetrics);
  };

  private handlePlayerGuess = (key: string) => {
    if (this.service.isGuessRight(key)) {
      this.handleRightGuess();
      this.shouldEndGame();
      return;
    }

    this.handleWrongGuess();
    this.shouldEndGame();
  };
}
