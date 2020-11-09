import { ReadingTest, Status } from './reading-test';

describe('Given ReadingTest', () => {
  let readingTest: ReadingTest;
  const gradableWords: Map<string, Status> = new Map([
    ['because', Status.UNREAD],
    ['fight', Status.UNREAD],
    ['election', Status.UNREAD],
    ['posted', Status.UNREAD],
    ['helium', Status.UNREAD],
  ]);

  beforeEach(() => {
    readingTest = new ReadingTest('Joe Blogs', gradableWords);
  });

  describe('When getting all words', () => {
    it('Then should provide all words', () => {
      let words = readingTest.getGradableWords();
      expect(words).toBe(gradableWords);
    });
  });

  describe('When marking a word as correct then add to the list of correct words', () => {
    it('Then that word should be a listed in correct words', () => {
      readingTest.gradeCorrectWord('flight');
      let correctWords = readingTest.getCorrectWords();
      expect(correctWords).toEqual(['flight']);
    });
  });
});
