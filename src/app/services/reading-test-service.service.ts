import { Injectable } from '@angular/core';

import { ReadingTest, Status } from '../model/reading-test';

@Injectable({
  providedIn: 'root',
})
export class ReadingTestServiceService {
  constructor() {}

  createReadingTest(studentName: string): ReadingTest {
    return new ReadingTest(studentName, new Map<string, Status>());
  }
}
