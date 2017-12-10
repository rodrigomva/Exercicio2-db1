import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/UserService";
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './detalhe.user.html'
})

export class DetalheUserComponent implements OnInit {
  private user: any;
  private listRepos: any;
  constructor(public userSerivce: UserService, private route: ActivatedRoute) {

  }

  
  ngOnInit() {
    //Buscar o parametro que foi passado da ListaUserComponent
    this.route.params.subscribe(params => {
      //Atribui o parametro com o login do usuario para a varialvel
      let login = params['login'];

      //Buscar os detalhes do usuario pelo login
      this.userSerivce.buscarPorLogin(login)
        .subscribe(user => this.user = user,
        error => console.log(error));

      //Busca os repositórios do usuario pelo login
      this.userSerivce.buscarRepoPorLogin(login)
        .subscribe(listRepos => this.listRepos = listRepos,
        error => console.log(error));
    });
  }
}