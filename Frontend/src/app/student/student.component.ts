import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../state/app.states';
import { getStudents } from '../state/student/student.actions';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [];

  constructor(private service: StudentService, private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.store.dispatch(getStudents());
  }

}
