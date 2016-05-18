import { Component, Input } from '@angular/core';

import { Programme } from './programme';

@Component({
    selector: 'programme',
    template: `
        <div *ngIf="programme">
            <h2>{{programme.name}}</h2>
            <h4>{{programme.startTime}} - {{programme.endTime}}</h4>
        </div>
    `
})
export class ProgrammeComponent {
    @Input()
    programme: Programme;
}
