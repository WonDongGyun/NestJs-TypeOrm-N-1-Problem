import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SetEmployeeDto } from './dto/SetEmployeeDto.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
	constructor(private readonly employeeService: EmployeeService) {}

	@Get()
	getAllEmployee() {
		return this.employeeService.getAllEmployee();
	}

	@Get('single')
	getEmployee(@Query('employeeId') employeeId: number) {
		return this.employeeService.getEmployee(employeeId);
	}

	@Post()
	setEmployee(@Body() setEmployeeDto: SetEmployeeDto) {
		return this.employeeService.setEmployee(setEmployeeDto);
	}
}
