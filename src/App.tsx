import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/data-table';
import { getData } from './lib/getData';
import { Data } from './types';
import './App.css';

import logoUrl from './assets/logo.png';

function App() {
	const [year, setYear] = useState(new Date().getFullYear());
	const [paidLeave, setPaidLeave] = useState(25);
	const [workingDays, setWorkinkDays] = useState(218);
	const [data, setData] = useState<Data | null>(null);

	const handleSubmit = () => {
		if (!year || !paidLeave || !workingDays) return;

		const { daysNumber, saturdaysAndSundaysNum, daysNumberFeriesSemaine, totalRTT } = getData(
			year,
			paidLeave,
			workingDays
		);

		const newData: Data = {
			daysYear: daysNumber,
			saturdaysAndSundaysNum,
			daysFeriesSemaineNum: daysNumberFeriesSemaine,
			paidLeaveNum: paidLeave,
			workingDaysNum: workingDays,
			totalRTT
		};

		setData(newData);
	};

	return (
		<>
			<header>
				<nav className='relative px-4 py-4 flex justify-between items-center bg-white'>
					<a className='text-3xl font-bold leading-none' href='#'>
						<img src={logoUrl} alt='John McBrain logo' />
					</a>
				</nav>
			</header>

			<main>
				<div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 grid grid-cols-1 lg:grid-cols-4 gap-4'>
					<div className='col-span-4 md:col-span-1 flex flex-col items-start gap-2'>
						<label htmlFor='year'>Year</label>
						<Input
							name='year'
							id='year'
							type='number'
							placeholder='Year'
							value={year}
							step='1'
							required
							onChange={(e) => setYear(parseInt(e.target.value))}
						/>
					</div>

					<div className='col-span-4 md:col-span-1 flex flex-col items-start gap-2'>
						<label htmlFor='paidleave'>Paid Leave</label>
						<Input
							name='paidleave'
							id='paidleave'
							type='number'
							placeholder='Number paid leave'
							step='1'
							value={paidLeave}
							required
							onChange={(e) => setPaidLeave(parseInt(e.target.value))}
						/>
					</div>
					<div className='col-span-4 md:col-span-1 flex flex-col items-start gap-2'>
						<label htmlFor='workingdays'>Working Days</label>
						<Input
							name='workingdays'
							id='workingdays'
							type='number'
							placeholder='Number of days worked'
							step='1'
							max='218'
							required
							value={workingDays}
							onChange={(e) => setWorkinkDays(parseInt(e.target.value))}
						/>
					</div>
					<Button onClick={handleSubmit} className='mt-auto col-span-4 md:col-span-1'>
						Calcul
					</Button>
				</div>

				{data && (
					<div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
						<DataTable data={data} />
					</div>
				)}
			</main>
		</>
	);
}

export default App;
