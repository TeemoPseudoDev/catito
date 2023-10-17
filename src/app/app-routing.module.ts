import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoCatitoComponent } from './info-catito/info-catito.component';
import { CardKittyComponent } from './card-kitty/card-kitty.component';
import { PerfilCatComponent } from './perfil-cat/perfil-cat.component';

const routes: Routes = [


 {
   path: 'catito',
   component:InfoCatitoComponent
 },

 {
   path: 'home',
   component:CardKittyComponent
 },

 {
  path: 'perfil',
  component:PerfilCatComponent
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
