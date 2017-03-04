var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Traverser } from 'angular-traversal';
import { ConfigurationService } from '../configuration.service';
var Navigation = (function () {
    function Navigation(config, traverser) {
        this.config = config;
        this.traverser = traverser;
        this.links = [];
    }
    Navigation.prototype.ngOnInit = function () {
        var _this = this;
        var base = this.config.get('BACKEND_URL');
        this.traverser.target.subscribe(function (target) {
            if (target.context.items) {
                _this.links = target.context.items.map(function (item) {
                    return {
                        path: item['@id'].split(base)[1],
                        title: item.title,
                    };
                });
            }
        });
    };
    return Navigation;
}());
Navigation = __decorate([
    Component({
        selector: 'plone-navigation',
        templateUrl: './navigation.html',
    }),
    __metadata("design:paramtypes", [ConfigurationService,
        Traverser])
], Navigation);
export { Navigation };
