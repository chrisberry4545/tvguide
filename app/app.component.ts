import {Component} from '@angular/core';

import { ChannelComponent } from './channel.component';
import { TimeScrollerComponent } from './time-scroller.component';

import { Channel } from './channel';
import { Programme } from './programme';

@Component({
    selector: 'my-app',
    template: `
        <time-scroller [currentTime]="currentTime" (timeChange)="testChange($event)"></time-scroller>
        <h4>{{currentTime}}</h4>
        <div [ngStyle]="{'transform': styleExp}" *ngFor="let channel of allChannels">
            <channel [channel]="channel"></channel>
        </div>
    `,

    directives: [ChannelComponent, TimeScrollerComponent]
})
export class AppComponent {
    allChannels = CHANNEL_DATA;

    currentTime = CURRENT_TIME;

    styleExp = '';

    testChange(currentTime: number) {
        this.styleExp = 'translateX('+currentTime+'px)'
    }
}

var CURRENT_TIME = 0;


var CHANNEL_ONE_PROGRAMMES: Programme[] = [
    new Programme('Programme1', 1000, 1500),
    new Programme('P2', 1500, 1600)
];

var CHANNEL_TWO_PROGRAMMES: Programme[] = [
    new Programme('C2 Program 1', 1000, 1500),
    new Programme('CP2', 1500, 1600)
];

var CHANNEL_DATA: Channel[] = [
    { name: 'Test channel one', programmes: CHANNEL_ONE_PROGRAMMES },
    { name: 'Test c2', programmes: CHANNEL_TWO_PROGRAMMES }
];
