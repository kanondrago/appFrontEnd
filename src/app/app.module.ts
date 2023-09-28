import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent, 
    NoFoundComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    PagesModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
