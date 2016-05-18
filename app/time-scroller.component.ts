import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'time-scroller',
    template: `
        <div>
            <button (click)="goBack()"> < </button>
            <h2>Time Scroller</h2>
            <h3>{{currentTime}}</h3>
            <button (click)="goForward()"> > </button>
        </div>
    `

})
export class TimeScrollerComponent {
    @Input()
    currentTime: number;

    @Output()
    timeChange = new EventEmitter();

    goBack() {
        console.log('going back');
        this.changeTime(-TIME_STEP);
    }

    goForward() {
        console.log('going forward');
        this.changeTime(TIME_STEP);
    }

    changeTime(amountToMove: number) {
        this.currentTime += amountToMove;
        this.timeChange.emit(this.currentTime);
    }
}

var TIME_STEP = 100;
