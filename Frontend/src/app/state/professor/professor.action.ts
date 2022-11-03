import { createAction, props } from "@ngrx/store";

export enum professorType {
    GET_ALL = '[Professor] find all professor',
    GET_ALL_SUCCESS = '[Professor] find all professor success',
    GET_ALL_FAILURE = '[Professor] find all professor failed'
  }

  export const getProfessors = createAction(professorType.GET_ALL);

  export const getProfessorsSuccess = createAction(
    professorType.GET_ALL_SUCCESS,
    props<{ professorList: [] }>()
  );
  
  export const getProfessorsFailed = createAction(
    professorType.GET_ALL_FAILURE,
    props<{ error: String }>()
  );