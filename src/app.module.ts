import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './domain/company/company.service';
import { EmployeeService } from './domain/employee/employee.service';
import { CompanyController } from './domain/company/company.controller';
import { EmployeeController } from './domain/employee/employee.controller';
import { CompanyModule } from './domain/company/company.module';
import { EmployeeModule } from './domain/employee/employee.module';
import { Company } from './domain/company/company.entity';
import { Employee } from './domain/employee/employee.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		TypeOrmModule.forFeature([Company, Employee]),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST,
			port: 3306,
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			entities: [Company, Employee],
			synchronize: true,
			logging: true
		}),
		CompanyModule,
		EmployeeModule
	]
})
export class AppModule {}
