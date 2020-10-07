import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice-1/exercice-1.component';
import { ColorDirectiveDirective } from './exercice-1/color-directive.directive';
import { DirectiveNavDirective } from './directive-nav.directive';


@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    ColorDirectiveDirective,
    DirectiveNavDirective,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
