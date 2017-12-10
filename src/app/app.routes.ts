import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheUserComponent } from "./pages/detalhe/detalhe.user.component";
import { ListaUserComponent } from "./pages/lista/lista.user.component";


//Configuração das Rotas
export const routes: Routes = [

  //Redireciona para a lista de usuários
  { path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  
  { path: 'usuarios', component: ListaUserComponent },
  { path: 'usuarios/detalhe/:login', component: DetalheUserComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);