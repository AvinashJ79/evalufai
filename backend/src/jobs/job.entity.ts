import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'jsonb', nullable: true })
  requirements: any;

  @ManyToOne(() => User)
  recruiter: User;

  @CreateDateColumn()
  createdAt: Date;
}

@Entity()
export class Assessment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: ['MCQ', 'CODING', 'VIDEO'],
  })
  type: string;

  @Column()
  duration: number; // in minutes

  @Column({ type: 'jsonb' })
  questions: any;

  @ManyToOne(() => Job)
  job: Job;
}
