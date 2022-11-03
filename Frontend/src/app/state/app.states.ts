import { CourseState } from "./course/course.reducres";
import { professorState } from "./professor/professor.reducers";
import { studentState } from "./student/student.reducers";

export interface GlobalState {
    course: CourseState
    professor: professorState
    student: studentState
}