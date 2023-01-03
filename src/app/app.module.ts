import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { SmallCardComponent } from './componentes/small-card/small-card.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './componentes/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
