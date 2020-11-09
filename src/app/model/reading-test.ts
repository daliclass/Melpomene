class ReadingTest {
  private studentName: string;
  private gradableWords: Map<string, Status>;

  constructor(studentName: string, gradableWords: Map<string, Status>) {
    this.studentName = studentName;
    this.gradableWords = gradableWords;
  }

  getGradableWords(): Map<string, Status> {
    return this.gradableWords;
  }

  gradeCorrectWord(word: string) {
    this.gradableWords.set(word, Status.CORRECT);
  }

  getCorrectWords(): Array<string> {
    let correctWords: Array<string> = [];
    this.gradableWords.forEach((value, key) => {
      if (value == Status.CORRECT) {
        correctWords.push(key);
      }
    });
    return correctWords;
  }
}

enum Status {
  CORRECT,
  INCORRET,
  UNREAD,
}

export { ReadingTest, Status };
