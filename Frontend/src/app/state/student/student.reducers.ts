import { createReducer, on } from '@ngrx/store';
import { getStudents, getStudentsFailed, getStudentsSuccess } from './student.actions';

export interface studentState {
  students: [];
  error: any;
}

export const intialState: studentState = {
  students: [],
  error: '',
};

export const studentReducer = createReducer(
  intialState,
  on(getStudents, (state, action) => {
    return {
      ...state,
    };
  }),
  on(getStudentsSuccess, (state, action) => {
    return {
      ...state,
      students: action.studentList,
    };
  }),
  on(getStudentsFailed, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
