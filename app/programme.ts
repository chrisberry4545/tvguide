
export class Programme {
    name: string;
    startTime: number;
    endTime: number

    constructor(name: string, startTime: number, endTime: number) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    getLength () {
        return this.endTime - this.startTime;
    };
}
