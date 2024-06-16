import { BaseComponent } from '@components/baseComponent';

export class QuizComponent extends BaseComponent {
  private question = new BaseComponent({ tagName: 'p', classNames: ['question'] });
  private answer = new BaseComponent({ tagName: 'p', classNames: ['answer'] });
  private attempts = new BaseComponent({ tagName: 'p', classNames: ['attempts'] });

  constructor() {
    super({ classNames: ['quiz'] });

    this.insertChildren(this.question, this.answer, this.attempts);
  }
  public setQuestion(question: string): void {
    this.question.setInnerHTML(question);
  }

  public setAnswer(answer: string): void {
    this.answer.setInnerHTML(answer);
  }

  public setAttempts(currentAttempt: number, maxAttempts: number): void {
    this.attempts.setContent(`Attempts: ${currentAttempt.toString()}/${maxAttempts.toString()}`);
  }
}
