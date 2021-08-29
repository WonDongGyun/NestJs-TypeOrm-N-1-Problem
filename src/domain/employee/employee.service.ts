import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../company/company.entity';
import { SetEmployeeDto } from './dto/SetEmployeeDto.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
	constructor(
		@InjectRepository(Employee)
		private readonly employeeRepository: Repository<Employee>,

		@InjectRepository(Company)
		private readonly companyRepository: Repository<Company>
	) {}

	getAllEmployee() {
		return this.employeeRepository.find();
	}

	getEmployee(employeeId: number) {
		return this.employeeRepository.findOne(employeeId);
	}

	async setEmployee(setEmployeeDto: SetEmployeeDto) {
		const employee: Employee = new Employee();
		employee.employeeName = setEmployeeDto.employeeName;
		employee.company = await this.companyRepository.findOne(
			setEmployeeDto.companyId
		);

		return this.employeeRepository.save(employee);
	}
}
