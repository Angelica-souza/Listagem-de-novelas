import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNovelasComponent } from './views/list-novelas/list-novelas.component';
import { RegisterNovelaComponent } from './views/register-novela/register-novela.component';

const routes: Routes = [
  {path:'', component: ListNovelasComponent},
  {path:'cadastro', component: RegisterNovelaComponent},
  {path:'editar/:id', component: RegisterNovelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
