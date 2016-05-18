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
var time_scroller_component_1 = require('./time-scroller.component');
var programme_1 = require('./programme');
var AppComponent = (function () {
    function AppComponent() {
        this.allChannels = CHANNEL_DATA;
        this.currentTime = CURRENT_TIME;
        this.styleExp = '';
    }
    AppComponent.prototype.testChange = function (currentTime) {
        this.styleExp = 'translateX(' + currentTime + 'px)';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <time-scroller [currentTime]=\"currentTime\" (timeChange)=\"testChange($event)\"></time-scroller>\n        <h4>{{currentTime}}</h4>\n        <div [ngStyle]=\"{'transform': styleExp}\" *ngFor=\"let channel of allChannels\">\n            <channel [channel]=\"channel\"></channel>\n        </div>\n    ",
            directives: [channel_component_1.ChannelComponent, time_scroller_component_1.TimeScrollerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var CURRENT_TIME = 0;
var CHANNEL_ONE_PROGRAMMES = [
    new programme_1.Programme('Programme1', 1000, 1500),
    new programme_1.Programme('P2', 1500, 1600)
];
var CHANNEL_TWO_PROGRAMMES = [
    new programme_1.Programme('C2 Program 1', 1000, 1500),
    new programme_1.Programme('CP2', 1500, 1600)
];
var CHANNEL_DATA = [
    { name: 'Test channel one', programmes: CHANNEL_ONE_PROGRAMMES },
    { name: 'Test c2', programmes: CHANNEL_TWO_PROGRAMMES }
];
//# sourceMappingURL=app.component.js.map