import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SumbuilderComponent } from './sumbuilder/sumbuilder.component';
import { PartcountsComponent } from './partcounts/partcounts.component';

@NgModule({
  declarations: [
    AppComponent,
    SumbuilderComponent,
    PartcountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
