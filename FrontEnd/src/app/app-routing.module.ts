import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CabinetPaintingComponent } from './components/cabinet-painting/cabinet-painting.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExteriorPaintingComponent } from './components/exterior-painting/exterior-painting.component';
import { InteriorPaintingComponent } from './components/interior-painting/interior-painting.component';
import { ProductsComponent } from './components/products/products.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "home",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "interior_painting",
    component: InteriorPaintingComponent
  },
  {
    path: "exterior_painting",
    component: ExteriorPaintingComponent
  },
  {
    path: "cabinet_painting",
    component: CabinetPaintingComponent
  },
  {
    path: "about_us",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "services",
    component: ProductsComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
