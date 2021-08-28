import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
	constructor(
		@InjectRepository(Company)
		private readonly companyRepository: Repository<Company>
	) {}

	getAllCompany() {
		return this.companyRepository.find();
	}

	getCompany(companyId: number) {
		return this.companyRepository.findOne(companyId);
	}
}