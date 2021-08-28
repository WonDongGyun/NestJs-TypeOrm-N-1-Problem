import { Controller, Get, Query } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
	constructor(private readonly companyService: CompanyService) {}

	@Get()
	getAllCompany() {
		return this.companyService.getAllCompany();
	}

	@Get()
	getCompany(@Query('companyId') companyId: number) {
		return this.companyService.getCompany(companyId);
	}
}
