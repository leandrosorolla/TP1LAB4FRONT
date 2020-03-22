import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ModalComponent } from './components/modal/modal.component';
import { TablaEmpresaComponent } from './component/tabla-empresa/tabla-empresa.component';
import { TablaNoticiaComponent } from './component/tabla-noticia/tabla-noticia.component';
import { ModalEmpresaComponent } from './component/modal-empresa/modal-empresa.component';
import { ModalNoticiaComponent } from './component/modal-noticia/modal-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    ModalComponent,
    TablaEmpresaComponent,
    TablaNoticiaComponent,
    ModalEmpresaComponent,
    ModalNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
