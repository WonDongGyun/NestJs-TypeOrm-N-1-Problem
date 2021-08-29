import { IsNumber, IsString } from 'class-validator';

export class SetEmployeeDto {
	@IsString()
	employeeName: string;

	@IsNumber()
	companyId: number;
}
