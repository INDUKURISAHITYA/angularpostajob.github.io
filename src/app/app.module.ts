import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule ,routingcomponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormService} from './form.service'




@NgModule({
  declarations: [
    AppComponent,
    routingcomponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule ,
    ReactiveFormsModule
   
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
