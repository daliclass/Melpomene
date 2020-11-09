import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  @Input()
  public studentName: string;

  @Output()
  public createTest: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  create() {
    if (
      this.studentName == '' ||
      this.studentName == null ||
      this.studentName == undefined
    ) {
      return;
    }
    this.createTest.emit(this.studentName);
  }
}
