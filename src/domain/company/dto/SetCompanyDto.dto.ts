import { IsString } from 'class-validator';

export class SetCompanyDto {
	@IsString()
	companyName: string;
}
