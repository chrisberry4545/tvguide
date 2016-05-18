import { Component, Input } from '@angular/core';

import { Programme } from './programme';

@Component({
    selector: 'programme',
    template: `
        <div class="programme" *ngIf="programme">
            <h2 class="programme__title">{{programme.name}}</h2>
            <h4 class="programme__timings">{{programme.startTime}} - {{programme.endTime}} ({{programme.getLength()}})</h4>
        </div>
    `,
    styles: [`
        .programme {

        }

            .programme__title {

            }

            .programme__timings {

            }
    `],
})
export class ProgrammeComponent {
    @Input()
    programme: Programme;
}
