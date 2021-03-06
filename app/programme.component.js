"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var programme_1 = require('./programme');
var ProgrammeComponent = (function () {
    function ProgrammeComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', programme_1.Programme)
    ], ProgrammeComponent.prototype, "programme", void 0);
    ProgrammeComponent = __decorate([
        core_1.Component({
            selector: 'programme',
            template: "\n        <div class=\"programme\" *ngIf=\"programme\">\n            <h2 class=\"programme__title\">{{programme.name}}</h2>\n            <h4 class=\"programme__timings\">{{programme.startTime}} - {{programme.endTime}} ({{programme.getLength()}})</h4>\n        </div>\n    ",
            styles: ["\n        .programme {\n\n        }\n\n            .programme__title {\n\n            }\n\n            .programme__timings {\n\n            }\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], ProgrammeComponent);
    return ProgrammeComponent;
}());
exports.ProgrammeComponent = ProgrammeComponent;
//# sourceMappingURL=programme.component.js.map