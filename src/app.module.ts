import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ProfessorModule } from './professor/professor.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [StudentModule, ProfessorModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
