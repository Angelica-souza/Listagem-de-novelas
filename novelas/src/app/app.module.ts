import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNovelasComponent } from './views/list-novelas/list-novelas.component';
import { RegisterNovelaComponent } from './views/register-novela/register-novela.component';


@NgModule({
  declarations: [
    AppComponent,
    ListNovelasComponent,
    RegisterNovelaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
