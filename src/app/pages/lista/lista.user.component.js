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
var ListaUserComponent = (function () {
    function ListaUserComponent(userSerivce) {
        this.userSerivce = userSerivce;
        this.carregando = false;
    }
    ListaUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Carregar usuarios iniciais
        this.userSerivce.buscarTodosPage(this.ultimoId)
            .subscribe(function (data) {
            //Grava o ultimo ID para buscar os próximos usuarios
            _this.ultimoId = data[data.length - 1].id;
            //Carrega a lista com o retorno da requisicao
            _this.list = data;
        }, function (error) { return console.log(error); });
    };
    //Carregar proximos usuários
    ListaUserComponent.prototype.buscarProximos = function () {
        var _this = this;
        this.carregando = true;
        this.userSerivce.buscarTodosPage(this.ultimoId)
            .subscribe(function (data) {
            //Adiciona os novos registros na lista
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var element = data_1[_i];
                _this.list.push(element);
            }
            //Atualiza o proximo registro
            _this.ultimoId = data[data.length - 1].id;
            //Oculta a mensagem que esta carregando
            _this.carregando = false;
        }, function (error) { return console.log(error); });
    };
    //Evento: Scroll
    ListaUserComponent.prototype.onWindowScroll = function () {
        var pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        var max = document.documentElement.scrollHeight;
        // Quando o scroll estiver no final busca os proximos usuarios
        if (pos >= max) {
            this.buscarProximos();
        }
    };
    return ListaUserComponent;
}());
__decorate([
    core_1.HostListener("window:scroll", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListaUserComponent.prototype, "onWindowScroll", null);
ListaUserComponent = __decorate([
    core_1.Component({
        templateUrl: './lista.user.html'
    }),
    __metadata("design:paramtypes", [UserService_1.UserService])
], ListaUserComponent);
exports.ListaUserComponent = ListaUserComponent;
