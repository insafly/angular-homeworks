import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThumbComponent } from './thumb.component/thumb.component';
import { PromoComponent } from './promo.component/promo.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbComponent,
    PromoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
