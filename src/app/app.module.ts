import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateApproachComponent } from './template-approach/template-approach.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateApproachComponent,
    ReactiveApproachComponent
  ],
  imports: [
    BrowserModule,FormsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
