interface IAppointmentModel {
  startDate: Date;
  startDateTimeZone?: string;
  endDate: Date;
  endDateTimeZone?: string;
  text: string;
  recurrenceRule?: string;
}

export default IAppointmentModel;
