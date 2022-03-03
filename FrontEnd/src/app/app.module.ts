import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './plantilla/navbar/navbar.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './plantilla/error/error.component';
import { InteriorPaintingComponent } from './components/interior-painting/interior-painting.component';
import { ExteriorPaintingComponent } from './components/exterior-painting/exterior-painting.component';
import { CabinetPaintingComponent } from './components/cabinet-painting/cabinet-painting.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent,
    InteriorPaintingComponent,
    ExteriorPaintingComponent,
    CabinetPaintingComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
