import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TicTacService } from './services/tic-tac.service';
import { TicTacComponent } from './components/tic-tac/tic-tac.component';


@NgModule({
  declarations: [
    AppComponent,
    TicTacComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TicTacService],
  bootstrap: [AppComponent]
})
export class AppModule { }
