import express from 'express';
import cors from 'cors';
import Appointment from "./models/Appointment";
import DataStore from "./DataStore";

const app = express();
const store = new DataStore();

app.use(express.json());
app.use(cors());



app.post('/api/calendar', (req, res) =>  {
    const appointment:Appointment = req.body;

    if (appointment.start === undefined ||
        appointment.end === undefined ||
        appointment.desc === undefined) {
        res.json({error: 'Missing prop'});
        return;
    }

    res.json(store.addAppointment(appointment));
});

app.listen(8080);
