import { Course } from 'src/course/entities/course.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Professor {
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
  grade: string;
  @OneToMany(() => Course, (course) => course.professor)
  courses: Course[];
}
