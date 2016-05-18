
export class Programme {
    name: string;
    startTime: number;
    endTime: number;

    getLength () {
        return this.endTime - this.startTime;
    };
}
