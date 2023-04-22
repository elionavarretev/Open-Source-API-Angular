import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeTableComponent } from './componets/poke-table/poke-table.component';
import { PokeDatailComponent } from './componets/poke-datail/poke-datail.component';

const routes: Routes = [
  {path: 'home', component: PokeTableComponent},
  {path: 'pokeDetail/:id',  component: PokeDatailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
