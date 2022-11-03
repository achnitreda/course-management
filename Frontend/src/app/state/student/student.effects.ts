import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { StudentService } from 'src/app/student.service';
import { getStudentsFailed, getStudentsSuccess, studentType } from './student.actions';

@Injectable()
export class StudentEffects {
  constructor(private actions$: Actions, private Service: StudentService) {}

  LoadAllstudents = createEffect(() =>
    this.actions$.pipe(
      ofType(studentType.GET_ALL),
      switchMap((action: any) => {
        return this.Service.getAllStudents().pipe(
          map((students) =>
            getStudentsSuccess({
              studentList: students,
            })
          ),
          catchError((error) => of(getStudentsFailed({ error })))
        );
      })
    )
  );
}
