import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { DetalheUserComponent } from "./pages/detalhe/detalhe.user.component";
import { ListaUserComponent } from "./pages/lista/lista.user.component";
import { UserService } from "./service/UserService";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ListaUserComponent,
    DetalheUserComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}