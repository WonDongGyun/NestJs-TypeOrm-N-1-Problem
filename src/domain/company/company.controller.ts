import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { SetCompanyDto } from './dto/SetCompanyDto.dto';

@Controller('company')
export class CompanyController {
	constructor(private readonly companyService: CompanyService) {}

	@Get()
	getAllCompany() {
		return this.companyService.getAllCompany();
	}

	@Get('single')
	getCompany(@Query('companyId') companyId: number) {
		return this.companyService.getCompany(companyId);
	}

	@Post()
	setCompany(@Body() setComanyDto: SetCompanyDto) {
		return this.companyService.setCompany(setComanyDto);
	}
}
