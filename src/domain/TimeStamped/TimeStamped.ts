import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class TimeStamped {
	@CreateDateColumn()
	createdDt: Date;

	@UpdateDateColumn()
	updatedDt: Date;
}
