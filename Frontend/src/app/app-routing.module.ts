import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: "course",
    component: CourseComponent,
  },
  {
    path: "professor",
    component: ProfessorComponent,
  },
  {
    path: "student",
    component: StudentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
