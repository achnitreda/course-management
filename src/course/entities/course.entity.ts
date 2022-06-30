import { Professor } from 'src/professor/entities/professor.entity';
import { Student } from 'src/student/entities/student.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  language: string;
  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
  @ManyToOne(() => Professor, (professor) => professor.courses)
  professor: Professor;
}
