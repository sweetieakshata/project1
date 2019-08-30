import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogindisplayComponent } from './logindisplay/logindisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';




@NgModule({
  declarations: [
    AppComponent,
    LogindisplayComponent,
    EmployeeloginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, MatExpansionModule,FormsModule,HttpClientModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
