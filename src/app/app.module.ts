import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ClipboardModule } from 'ngx-clipboard';
import { RankingComponent } from './ranking/ranking.component';
import { NgxPaginationModule } from 'ngx-pagination';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    RankingComponent,

   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ClipboardModule,
    NgxPaginationModule
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
