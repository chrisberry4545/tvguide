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
var channel_component_1 = require('./channel.component');
var AppComponent = (function () {
    function AppComponent() {
        this.allChannels = CHANNEL_DATA;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div *ngFor=\"let channel of allChannels\">\n            <channel [channel]=\"channel\"></channel>\n        </div>\n    ",
            directives: [channel_component_1.ChannelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var CHANNEL_ONE_PROGRAMMES = [
    { name: 'Programm 1', startTime: 1000, endTime: 1500 },
    { name: 'P2', startTime: 1500, endTime: 1600 }
];
var CHANNEL_TWO_PROGRAMMES = [
    { name: 'C2 Programm 1', startTime: 1000, endTime: 1500 },
    { name: 'C2P2', startTime: 1500, endTime: 1600 }
];
var CHANNEL_DATA = [
    { name: 'Test channel one', programmes: CHANNEL_ONE_PROGRAMMES },
    { name: 'Test c2', programmes: CHANNEL_TWO_PROGRAMMES }
];
//# sourceMappingURL=app.component.js.map