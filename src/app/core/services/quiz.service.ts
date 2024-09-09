import { inject, Injectable, signal } from '@angular/core';
import { HttpQuizzesService, Quiz } from './http-quizzes.service';
import { BehaviorSubject } from 'rxjs';
import { QuizStatus } from '../../shared/enums/quiz-status';
import { Key } from '../../quiz/components/keyboard/keyboard.component';
import { MAX_GUESS_ATTEMPTS } from '../../shared/constants/max-guess-attempts';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private httpQuizzesService = inject(HttpQuizzesService);

  private quizStatus$$ = new BehaviorSubject<QuizStatus>(QuizStatus.IN_PROGRESS);
  public quizStatus$ = this.quizStatus$$.asObservable();

  public incorrectGuesses = signal(0);
  public question = signal('');
  public hiddenAnswer = signal('');
  private answer = '';

  public getQuiz(): void {
    this.httpQuizzesService.getRandomQuiz().subscribe((quiz) => {
      this.setQuizValues(quiz);
    });
  }

  private setQuizValues(quiz: Quiz): void {
    this.answer = quiz.answer;
    this.hiddenAnswer.set('_'.repeat(this.answer.length));
    this.question.set(quiz.question);
    this.incorrectGuesses.set(0);
    this.quizStatus$$.next(QuizStatus.IN_PROGRESS);
  }

  public processKeys(keys: Key[]): void {
    this.updateHiddenAnswer(keys);
    this.updateIncorrectGuessCount(keys);
    this.updateStatus();
  }

  private updateStatus(): void {
    if (this.incorrectGuesses() >= MAX_GUESS_ATTEMPTS) {
      this.quizStatus$$.next(QuizStatus.LOST);
    }
    if (this.hiddenAnswer() === this.answer) {
      this.quizStatus$$.next(QuizStatus.WON);
    }
  }

  private isKeyPressedAndNotInAnswer = (key: Key): boolean =>
    key.isDisabled && !this.answer.toLowerCase().includes(key.value);

  private updateIncorrectGuessCount(keys: Key[]): void {
    const incorrectGuesses = keys.filter(this.isKeyPressedAndNotInAnswer).length;
    this.incorrectGuesses.set(incorrectGuesses);
  }

  private isKeyPressedAndMatchesLetter = (key: Key, letter: string): boolean =>
    key.value === letter.toLowerCase() && key.isDisabled;

  private updateHiddenAnswer(keys: Key[]): void {
    const revealedLetters = Array.from(this.answer, (letter) => {
      const matchingKey = keys.find((key) => this.isKeyPressedAndMatchesLetter(key, letter));
      return matchingKey ? letter : '_';
    });
    this.hiddenAnswer.set(revealedLetters.join(''));
  }
}
