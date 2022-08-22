import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeBlockComponent } from './time-block/time-block.component';
import { DigitPipe } from './digit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeBlockComponent,
    DigitPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
