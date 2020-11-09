import { Component, OnInit, Input } from '@angular/core';
import { ReadingTestServiceService } from '../services/reading-test-service.service';
import { ReadingTest } from '../model/reading-test';

@Component({
  selector: 'app-reading-test',
  templateUrl: './reading-test.component.html',
  styleUrls: ['./reading-test.component.scss'],
  providers: [ReadingTestServiceService],
})
export class ReadingTestComponent implements OnInit {
  readingTest: ReadingTest;

  constructor(private readingTestService: ReadingTestServiceService) {}

  ngOnInit(): void {}

  public createTest(studentName: string) {
    if (studentName == '' || studentName == null || studentName == undefined) {
      return;
    }
    this.readingTest = this.readingTestService.createReadingTest(studentName);
  }

  hasUser(): boolean {
    return this.readingTest != undefined || this.readingTest != null;
  }
}
