import { createAction, props } from '@ngrx/store';

export enum courseType {
  GET_ALL = '[Course] find all course',
  GET_ALL_SUCCESS = '[Course] find all course success',
  GET_ALL_FAILURE = '[Course] find all course failed'
}

export const getCourses = createAction(courseType.GET_ALL);

export const getCoursesSuccess = createAction(
  courseType.GET_ALL_SUCCESS,
  props<{ courseList: [] }>()
);

export const getCoursesFailed = createAction(
  courseType.GET_ALL_FAILURE,
  props<{ error: String }>()
);
