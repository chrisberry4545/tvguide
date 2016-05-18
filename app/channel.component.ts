import { Component, Input } from '@angular/core';

import { Channel } from './channel';

import { ProgrammeComponent } from './programme.component';

@Component({
    selector: 'channel',
    template: `
        <div *ngIf="channel">
            <h1>Channel</h1>
            <h2>{{channel.name}}</h2>
            <div *ngFor="let programme of channel.programmes">
                <programme [programme]="programme"></programme>
            </div>
        </div>
    `,
    directives: [ProgrammeComponent]
})
export class ChannelComponent {
    @Input()
    channel: Channel;
}
