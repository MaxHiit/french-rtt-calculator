import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table';
import { Data } from '@/types';

type DataTableProps = {
	data: Data;
};

export function DataTable({ data }: DataTableProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead className='text-right'>Nombre</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className='text-left font-medium'>Nombre de jour dans l'année</TableCell>
					<TableCell className='text-right'>{data.daysYear}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className='text-left font-medium'>Nombre de samedis et de dimanches</TableCell>
					<TableCell className='text-right'>{data.saturdaysAndSundaysNum}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className='text-left font-medium'>
						Nombre de jours fériés ne tombant pas le week-end{' '}
					</TableCell>
					<TableCell className='text-right'>{data.daysFeriesSemaineNum}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className='text-left font-medium'>Nombre de jours de congés payés</TableCell>
					<TableCell className='text-right'>{data.paidLeaveNum}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className='text-left font-medium'>Nombre maximum de jours travaillés</TableCell>
					<TableCell className='text-right'>{data.workingDaysNum}</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={1} className='text-left'>
						Total RTT
					</TableCell>
					<TableCell className='text-right'>{data.totalRTT}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
