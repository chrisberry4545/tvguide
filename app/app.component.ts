import {Component} from '@angular/core';

import { ChannelComponent } from './channel.component';

import { Channel } from './channel';
import { Programme } from './programme';

@Component({
    selector: 'my-app',
    template: `
        <div *ngFor="let channel of allChannels">
            <channel [channel]="channel"></channel>
        </div>
    `,

    directives: [ChannelComponent]
})
export class AppComponent {
    allChannels = CHANNEL_DATA;
}


var CHANNEL_ONE_PROGRAMMES: Programme[] = [
    { name: 'Programm 1', startTime: 1000, endTime: 1500 },
    { name: 'P2', startTime: 1500, endTime: 1600 }
];

var CHANNEL_TWO_PROGRAMMES: Programme[] = [
    { name: 'C2 Programm 1', startTime: 1000, endTime: 1500 },
    { name: 'C2P2', startTime: 1500, endTime: 1600 }
]

var CHANNEL_DATA: Channel[] = [
    { name: 'Test channel one', programmes: CHANNEL_ONE_PROGRAMMES },
    { name: 'Test c2', programmes: CHANNEL_TWO_PROGRAMMES }
];
