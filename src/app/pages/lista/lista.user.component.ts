import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { UserService } from "../../service/UserService";

@Component({
  templateUrl: './lista.user.html'
})

export class ListaUserComponent implements OnInit {
  public list: any;
  public ultimoId: any;
  public carregando: boolean = false;
  constructor(public userSerivce: UserService) {

  }

  
  ngOnInit() {
    // Carregar usuarios iniciais
    this.userSerivce.buscarTodosPage(this.ultimoId)
      .subscribe(data => {
        //Grava o ultimo ID para buscar os próximos usuarios
        this.ultimoId = data[data.length - 1].id;

        //Carrega a lista com o retorno da requisicao
        this.list = data;
      },
      error => console.log(error));
  }

  //Carregar proximos usuários
  public buscarProximos() {
    this.carregando = true;
    this.userSerivce.buscarTodosPage(this.ultimoId)
      .subscribe(data => {
        //Adiciona os novos registros na lista
        for (let element of data) {
          this.list.push(element);
        }

        //Atualiza o proximo registro
        this.ultimoId = data[data.length - 1].id;
        
        //Oculta a mensagem que esta carregando
        this.carregando = false;
      },
      error => console.log(error));
  }


  //Evento: Scroll
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // Quando o scroll estiver no final busca os proximos usuarios
    if (pos >= max) {
      this.buscarProximos();
    }
  }

}
