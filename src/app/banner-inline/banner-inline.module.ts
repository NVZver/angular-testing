import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BannerInlineComponent } from './banner-inline.component';

@NgModule({
  declarations: [
    BannerInlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    BannerInlineComponent
  ],
  providers: [],
  bootstrap: [BannerInlineComponent]
})
export class BannerInlineModule { }
