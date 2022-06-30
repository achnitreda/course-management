import { Course } from 'src/course/entities/course.entity';
import {Column,Entity,JoinTable,ManyToMany,PrimaryGeneratedColumn,} from 'typeorm';
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  age: number;
  @Column()
  cni: string;
  @Column()
  cne: string;
  @ManyToMany(() => Course, (course) => course.students)
  @JoinTable()
  courses: Course[];
}
