import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthMenuComponent } from './components/(header)/auth-menu/auth-menu.component';
import { HeaderLogoComponent } from './components/(header)/header-logo/header-logo.component';
import { MainMenuComponent } from './components/(header)/main-menu/main-menu.component';
import { NavbarFiltersComponent } from './components/(header)/navbar-filters/navbar-filters.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainMenuComponent,
    AuthMenuComponent,
    NavbarFiltersComponent,
    HeaderLogoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule],
})
export class AppModule {}
