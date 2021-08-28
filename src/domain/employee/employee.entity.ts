import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../company/company.entity';
import { TimeStamped } from '../TimeStamped/TimeStamped';

@Entity('EMPLOYEE')
export class Employee extends TimeStamped {
	@PrimaryGeneratedColumn('increment')
	employeeId: number;

	@Column({ type: 'varchar' })
	employeeName: string;

	@ManyToOne(() => Company, (company) => company.companyId)
	company: Company;
}
