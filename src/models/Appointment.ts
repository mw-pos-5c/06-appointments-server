export default class Appointment {
    start: string;
    end: string;
    loc: string;
    desc: string;


    constructor(start: string, end: string, loc: string, desc: string) {
        this.start = start;
        this.end = end;
        this.loc = loc;
        this.desc = desc;
    }

    static parse(data: any): Appointment | undefined {


        return new Appointment();
    }

}
