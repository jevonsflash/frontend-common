import { CheckMessage } from "./CheckMessage";


export class DateCheckMessage extends CheckMessage {
    startDate: Date;
    endDate: Date;
    dateRange: Array<Date>;

    /**
     *
     */
    constructor() {
        super();
        this.dateRange = [
            new Date(new Date().toLocaleDateString()),
            new Date(
                new Date(new Date().toLocaleDateString()).getTime() +
                24 * 60 * 60 * 1000 -
                1
            ),
        ];
    }
}