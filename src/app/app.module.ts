import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyloadComponent } from './shared/component/lazyload/lazyload.component';
import { LazyloadDirective } from './shared/directive/lazyload.directive';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HighlightTextComponent } from './shared/component/highlight-text/highlight-text.component';
import { HighlightDirective } from './shared/directive/highlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LazyloadComponent,
    LazyloadDirective,
    HighlightTextComponent,
    HighlightDirective

  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
