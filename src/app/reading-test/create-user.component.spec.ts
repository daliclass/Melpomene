import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { FormsModule } from '@angular/forms';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUserComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when button pressed and there is a student name then emit event', () => {
    const createTestButton: HTMLButtonElement = fixture.nativeElement.querySelector(
      '#createStudent'
    );
    const studentNameInput: HTMLInputElement = fixture.nativeElement.querySelector(
      '#studentNameInput'
    );

    studentNameInput.value = 'Boris';
    studentNameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    component.createTest.subscribe((event) => {
      expect(event).toEqual('Boris');
    });
    createTestButton.click();
  });

  it('when button pressed and there is not a student name entered then dont emit event', () => {
    const createTestButton: HTMLButtonElement = fixture.nativeElement.querySelector(
      '#createStudent'
    );
    const studentNameInput: HTMLInputElement = fixture.nativeElement.querySelector(
      '#studentNameInput'
    );

    studentNameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    component.createTest.subscribe((event) => {
      fail('Unexpected invocation of input event of value ' + event);
    });
    createTestButton.click();
  });

  it('when button pressed and there is empty string entered then dont emit event', () => {
    const createTestButton: HTMLButtonElement = fixture.nativeElement.querySelector(
      '#createStudent'
    );
    const studentNameInput: HTMLInputElement = fixture.nativeElement.querySelector(
      '#studentNameInput'
    );

    studentNameInput.dispatchEvent(new Event('input'));
    studentNameInput.value = '';
    fixture.detectChanges();
    component.createTest.subscribe((event) => {
      fail('Unexpected invocation of input event of value ' + event);
    });
    createTestButton.click();
  });
});
