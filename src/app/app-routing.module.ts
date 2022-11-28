import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ListasComponent } from './components/listas/listas.component';

const routes: Routes = [
  {path: '', component: CardComponent},
  {path: 'list', component: ListasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
