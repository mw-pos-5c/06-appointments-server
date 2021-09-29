import Loki from 'lokijs';
import Appointment from "./models/Appointment";

export default class DataStore {

    db: Loki;
    calendar: Collection<Appointment>

    constructor() {
       this.db = new Loki('data.db');
       this.db.removeCollection('calendar');
       this.calendar =  this.db.addCollection('calendar', {});
   }

   public addAppointment(appointment: Appointment): Appointment | undefined {
        return this.calendar.insert(appointment);
   }

}
