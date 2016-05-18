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
var TimeScrollerComponent = (function () {
    function TimeScrollerComponent() {
        this.timeChange = new core_1.EventEmitter();
    }
    TimeScrollerComponent.prototype.goBack = function () {
        console.log('going back');
        this.changeTime(-TIME_STEP);
    };
    TimeScrollerComponent.prototype.goForward = function () {
        console.log('going forward');
        this.changeTime(TIME_STEP);
    };
    TimeScrollerComponent.prototype.changeTime = function (amountToMove) {
        this.currentTime += amountToMove;
        this.timeChange.emit(this.currentTime);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TimeScrollerComponent.prototype, "currentTime", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TimeScrollerComponent.prototype, "timeChange", void 0);
    TimeScrollerComponent = __decorate([
        core_1.Component({
            selector: 'time-scroller',
            template: "\n        <div>\n            <button (click)=\"goBack()\"> < </button>\n            <h2>Time Scroller</h2>\n            <h3>{{currentTime}}</h3>\n            <button (click)=\"goForward()\"> > </button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TimeScrollerComponent);
    return TimeScrollerComponent;
}());
exports.TimeScrollerComponent = TimeScrollerComponent;
var TIME_STEP = 100;
//# sourceMappingURL=time-scroller.component.js.map