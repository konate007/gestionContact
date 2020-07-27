import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuillComponent } from './acceuill/acceuill.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { Routes, RouterModule } from '@angular/router';
import { ListContactComponent } from './list-contact/list-contact.component';
import {HttpClientModule} from '@angular/common/http';
import { ModificationComponent } from './modification/modification.component';
import { CarouselNavigationComponent } from './carousel-navigation/carousel-navigation.component';
const appRoutes: Routes = [
  {
    path:'acceuill',component:AcceuillComponent
  },
  {path:'header' ,component:HeaderComponent},
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'formulaire',component:FormulaireComponent
  },
  {
    path:'liste',component:ListContactComponent
  },
  {
    path:'modifier',component:ModificationComponent
  },
  {
    path:'',component:AcceuillComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AcceuillComponent,
    FooterComponent,
    HeaderComponent,
    FormulaireComponent,
    ListContactComponent,
    ModificationComponent,
    CarouselNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
