import { type QuizData } from '@interfaces/QuizData';

export function shuffleQuizzes(quizzes: QuizData[]): QuizData[] {
  const shuffledQuizzes = [...quizzes];

  for (let index = shuffledQuizzes.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledQuizzes[index], shuffledQuizzes[randomIndex]] = [
      shuffledQuizzes[randomIndex]!,
      shuffledQuizzes[index]!,
    ];
  }

  return shuffledQuizzes;
}
