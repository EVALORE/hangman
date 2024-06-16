import ListOfQuizzes from '../data/quizzes.json';
import { type TriviaMetrics } from '@interfaces/TriviaMetrics';
import { shuffleQuizzes } from '@utils/shuffleQuizzes';

export class AppService {
  public triviaMetrics: TriviaMetrics;
  public currentAttempt = 0;
  public readonly maxAttempts: number;

  private readonly ListOfQuizzes = shuffleQuizzes(ListOfQuizzes);
  private readonly numberOfQuizzes = this.ListOfQuizzes.length;

  private currentQuizId = 0;
  private currentQuiz = this.ListOfQuizzes[this.currentQuizId]!;

  private guesses = new Set<string>();

  constructor(maxAttempts?: number) {
    this.maxAttempts = maxAttempts ?? 6;

    this.triviaMetrics = {
      question: this.question,
      answer: this.hiddenAnswer,
      currentAttempt: this.currentAttempt,
      maxAttempts: this.maxAttempts,
    };
  }

  public get question(): string {
    return this.currentQuiz.question;
  }

  public get answer(): string {
    return this.currentQuiz.answer;
  }

  public get hiddenAnswer(): string {
    return this.answer
      .split('')
      .map((letter) => {
        if (this.guesses.has(letter.toLowerCase())) return letter;
        if (letter === ' ') return ' ';
        return '_';
      })
      .join('');
  }

  public get isCorrectAnswer(): boolean {
    return this.hiddenAnswer === this.answer;
  }

  public get isMaxAttemptsReached(): boolean {
    return this.currentAttempt >= this.maxAttempts;
  }

  public newCurrent(): void {
    this.currentQuizId = (this.currentQuizId + 1) % this.numberOfQuizzes;
    this.guesses.clear();
    this.currentAttempt = 0;
    this.currentQuiz = this.ListOfQuizzes[this.currentQuizId]!;

    this.triviaMetrics = {
      question: this.question,
      answer: this.hiddenAnswer,
      currentAttempt: this.currentAttempt,
      maxAttempts: this.maxAttempts,
    };
  }

  public isGuessRight(playerGuess: string): boolean {
    this.recordGuess(playerGuess);
    return this.answer.toLowerCase().includes(playerGuess);
  }

  public recordGuess(playerGuess: string): void {
    this.guesses.add(playerGuess);
  }

  public incrementAttempts(): void {
    if (this.currentAttempt < this.maxAttempts) this.currentAttempt += 1;
  }
}
