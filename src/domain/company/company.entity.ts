import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { TimeStamped } from '../TimeStamped/TimeStamped';

@Entity('COMPANY')
export class Company extends TimeStamped {
	@PrimaryGeneratedColumn('increment')
	companyId: number;

	@Column({ type: 'varchar' })
	companyName: string;

	@OneToMany(() => Employee, (employee) => employee.employeeId, {
		onDelete: 'CASCADE'
	})
	employee: Employee[];
}