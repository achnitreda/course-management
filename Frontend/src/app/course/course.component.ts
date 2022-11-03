import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CourseService } from '../course.service';
import { GlobalState } from '../state/app.states';
import { getCourses } from '../state/course/course.actions';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseList = [];

  constructor(private service: CourseService, private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.store.dispatch(getCourses());
  }

}
