import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveCardComponent } from './components/responsive-card/responsive-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CallToActionButtonComponent } from './components/call-to-action-button/call-to-action-button.component';
import { BlurBoxComponent } from './components/blur-box/blur-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveCardComponent,
    HeaderComponent,
    FooterComponent,
    CallToActionButtonComponent,
    BlurBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
