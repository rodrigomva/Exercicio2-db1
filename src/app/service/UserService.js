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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    // Classe contrutora
    function UserService(_http) {
        this._http = _http;
        // URL base da API do github
        this.url = 'https://api.github.com';
    }
    UserService.prototype.buscarTodosPage = function (ultimoId) {
        return this._http.get(this.url + "/users?since=" + ultimoId)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.buscarPorLogin = function (login) {
        return this._http.get(this.url + "/users/" + login)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.buscarRepoPorLogin = function (login) {
        return this._http.get(this.url + "/users/" + login + "/repos")
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
