import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { InfoCatitoComponent } from '../info-catito/info-catito.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
