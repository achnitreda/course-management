import { createAction, props } from '@ngrx/store';

export enum studentType {
  GET_ALL = '[Student] find all student',
  GET_ALL_SUCCESS = '[Student] find all student success',
  GET_ALL_FAILURE = '[Student] find all student failed'
}

export const getStudents = createAction(studentType.GET_ALL);

export const getStudentsSuccess = createAction(
  studentType.GET_ALL_SUCCESS,
  props<{ studentList: [] }>()
);

export const getStudentsFailed = createAction(
  studentType.GET_ALL_FAILURE,
  props<{ error: String }>()
);
