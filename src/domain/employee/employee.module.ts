import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../company/company.entity';
import { EmployeeController } from './employee.controller';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Module({
	imports: [TypeOrmModule.forFeature([Company, Employee])],
	controllers: [EmployeeController],
	providers: [EmployeeService]
})
export class EmployeeModule {}
