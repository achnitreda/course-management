import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { courseReducer } from './state/course/course.reducres';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './state/course/course.effets';
import { professorReducer } from './state/professor/professor.reducers';
import { ProfessorEffects } from './state/professor/professor.effects';
import { studentReducer } from './state/student/student.reducers';
import { StudentEffects } from './state/student/student.effects';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ProfessorComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      course : courseReducer,
      professor : professorReducer,
      student : studentReducer
    }),
    EffectsModule.forRoot([
      CourseEffects,
      ProfessorEffects,
      StudentEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
