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
var UserService_1 = require("../../service/UserService");
var router_1 = require("@angular/router");
var DetalheUserComponent = (function () {
    function DetalheUserComponent(userSerivce, route) {
        this.userSerivce = userSerivce;
        this.route = route;
    }
    DetalheUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Buscar o parametro que foi passado da ListaUserComponent
        this.route.params.subscribe(function (params) {
            //Atribui o parametro com o login do usuario para a varialvel
            var login = params['login'];
            //Buscar os detalhes do usuario pelo login
            _this.userSerivce.buscarPorLogin(login)
                .subscribe(function (user) { return _this.user = user; }, function (error) { return console.log(error); });
            //Busca os repositórios do usuario pelo login
            _this.userSerivce.buscarRepoPorLogin(login)
                .subscribe(function (listRepos) { return _this.listRepos = listRepos; }, function (error) { return console.log(error); });
        });
    };
    return DetalheUserComponent;
}());
DetalheUserComponent = __decorate([
    core_1.Component({
        templateUrl: './detalhe.user.html'
    }),
    __metadata("design:paramtypes", [UserService_1.UserService, router_1.ActivatedRoute])
], DetalheUserComponent);
exports.DetalheUserComponent = DetalheUserComponent;
