import joursFeries from '@socialgouv/jours-feries';

export const getData = (year: number, paidLeave: number, workingDays: number) => {
	// Determines if the year is a leap year
	const isBissextile = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

	// Calculate the number of days in the year
	const daysNumber = isBissextile ? 366 : 365;

	// Calculate the number of Saturdays and Sundays
	let saturdaysAndSundaysNum = 0;

	for (let i = 0; i < daysNumber; i++) {
		const date = new Date(year, 0, i + 1);
		if (date.getDay() === 0 || date.getDay() === 6) {
			saturdaysAndSundaysNum++;
		}
	}

	// Retrieve the list of public holidays
	const publicHolidays = joursFeries(year);

	// Calculate the number of public holidays during the week
	let daysNumberFeriesSemaine = 0;

	// Get the values of publicHolidays object
	const publicHolidayDates: Date[] = Object.values(publicHolidays);

	for (const date of publicHolidayDates) {
		const dayOfWeek = date.getDay();

		if (dayOfWeek >= 1 && dayOfWeek <= 5) {
			daysNumberFeriesSemaine++;
		}
	}

	const totalRTT =
		daysNumber - workingDays - saturdaysAndSundaysNum - daysNumberFeriesSemaine - paidLeave;

	// Calculate the number of RTT
	return { daysNumber, saturdaysAndSundaysNum, daysNumberFeriesSemaine, totalRTT };
};
