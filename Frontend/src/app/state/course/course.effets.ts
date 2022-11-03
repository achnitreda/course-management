import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CourseService } from 'src/app/course.service';
import {
    courseType,
  getCourses,
  getCoursesFailed,
  getCoursesSuccess,
} from './course.actions';

@Injectable()
export class CourseEffects {
  constructor(private actions$: Actions, private Service: CourseService) {}

  LoadAllCourses = createEffect(() =>
    this.actions$.pipe(
      ofType(courseType.GET_ALL),
      switchMap((action: any) => {
        return this.Service.getAllCourses().pipe(
          map((courses) =>
            getCoursesSuccess({
              courseList: courses,
            })
          ),
          catchError((error) => of(getCoursesFailed({ error })))
        );
      })
    )
  );
}
