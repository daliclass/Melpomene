import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ReadingTestComponent } from './reading-test.component';
import { ReadingTestServiceService } from '../services/reading-test-service.service';
import { ReadingTest, Status } from '../model/reading-test';

class MockedReadingTestService {
  public createReadingTest(studentName: string): ReadingTest {
    return new ReadingTest(studentName, new Map<string, Status>());
  }
}

describe('ReadingTestComponent', () => {
  let component: ReadingTestComponent;
  let fixture: ComponentFixture<ReadingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ReadingTestComponent],
      providers: [
        {
          provide: ReadingTestServiceService,
          useValue: MockedReadingTestService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when creating filling in a students name, then create a reading test', () => {
    expect(component.readingTest).toBeUndefined();
    component.createTest('boris');
    expect(component.readingTest).toBeDefined();
  });
});
