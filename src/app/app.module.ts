import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoTypedFormModule } from './demo-typed-form/demo-typed-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [DemoTypedFormModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
