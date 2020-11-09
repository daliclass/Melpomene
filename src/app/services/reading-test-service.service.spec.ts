import { TestBed } from '@angular/core/testing';
import { ReadingTest } from '../model/reading-test';
import { ReadingTestServiceService } from './reading-test-service.service';

describe('Given a ReadingTestServiceService', () => {
  let service: ReadingTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingTestServiceService);
  });

  describe('When a teacher would like to start a test for a student', () => {
    const studentName = 'Joe Blogs';

    it('Then should provide a ReadingTest', () => {
      const readingTest = service.createReadingTest(studentName);
      expect(readingTest).toBeInstanceOf(ReadingTest);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
