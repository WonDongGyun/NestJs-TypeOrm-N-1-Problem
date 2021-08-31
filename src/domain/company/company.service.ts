import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { Company } from './company.entity';
import { SetCompanyDto } from './dto/SetCompanyDto.dto';

// n + 1 problem example
@Injectable()
export class CompanyService {
	constructor(
		@InjectRepository(Company)
		private readonly companyRepository: Repository<Company>
	) {}

	// oneToMany에서 lazy: true인 경우 N + 1 발생
	// async getAllCompany() {

	// 	const companies = this.companyRepository.find();

	// 	for (const company of await companies) {
	// 		const employee = await company.employee;
	// 	}
	// 	return companies;
	// }

	// N + 1 문제 relations 옵션으로 해결하기
	// getAllCompany() {
	// 	return this.companyRepository.find({
	// 		relations: ['employee']
	// 	});
	// }

	// N + 1 문제 queryBuilder 옵션으로 해결하기
	getAllCompany() {
		return this.companyRepository
			.createQueryBuilder('company')
			.leftJoinAndSelect('company.employee', 'employee')
			.getMany();
	}

	// oneToMany에서 lazy: true인 경우 N + 1 발생
	// getCompany(companyId: number) {

	// 	const companies: Company = await this.companyRepository.findOne(
	// 		companyId
	// 	);
	// 	const employees: Employee[] = await companies.employee;
	// 	return companies;
	// }

	getCompany(companyId: number) {
		return this.companyRepository.findOne(companyId);
	}

	setCompany(setComanyDto: SetCompanyDto) {
		return this.companyRepository.save(setComanyDto);
	}
}
