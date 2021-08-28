import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './domain/company/company.service';
import { EmployeeService } from './domain/employee/employee.service';
import { CompanyController } from './domain/company/company.controller';
import { EmployeeController } from './domain/employee/employee.controller';

@Module({
	imports: [
		TypeOrmModule.forFeature([]),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST,
			port: 3306,
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			entities: [],
			synchronize: false
		})
	],
	providers: [CompanyService, EmployeeService],
	controllers: [CompanyController, EmployeeController]
})
export class AppModule {}
