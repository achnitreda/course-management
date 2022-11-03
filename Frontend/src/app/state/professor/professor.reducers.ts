import { createReducer, on } from "@ngrx/store";
import { getProfessors, getProfessorsFailed, getProfessorsSuccess } from "./professor.action";

export interface professorState{
    professors: [],
    error: any
    
}

export const intialState: professorState = {
    professors: [],
    error : ""
}

export const professorReducer = createReducer(
    intialState,
   on(getProfessors,(state, action) =>{
    return {
        ...state
    }
   }),
   on(getProfessorsSuccess,(state, action) =>{
    return {
        ...state,
        professors :action.professorList
    }
   }),
   on(getProfessorsFailed,(state, action) =>{
    return {
        ...state,
        error : action.error
    }
   })
  );