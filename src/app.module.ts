import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ProfessorModule } from './professor/professor.module';
import { CourseModule } from './course/course.module';
import { Course } from './course/entities/course.entity';
import { Professor } from './professor/entities/professor.entity';
import { Student } from './student/entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'course-management',
      username: 'root',
      password: '',
      synchronize: true,
      entities: [Professor, Course, Student],
    }),
    CourseModule,
    ProfessorModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
