import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TextToMorsePipe } from './custom.pipes/text.to.morse.pipe';
import { MorseToTextPipe } from './custom.pipes/morse.to.text.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TextToMorsePipe,
    MorseToTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
