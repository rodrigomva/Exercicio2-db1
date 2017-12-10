"use strict";
var router_1 = require("@angular/router");
var detalhe_user_component_1 = require("./pages/detalhe/detalhe.user.component");
var lista_user_component_1 = require("./pages/lista/lista.user.component");
//Configuração das Rotas
exports.routes = [
    //Redireciona para a lista de usuários
    { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
    { path: 'usuarios', component: lista_user_component_1.ListaUserComponent },
    { path: 'usuarios/detalhe/:login', component: detalhe_user_component_1.DetalheUserComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
