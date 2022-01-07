import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstQuestionComponent } from './pages/first-question/first-question.component';

const routes: Routes = [
  {
    path: ``, 
    loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'first-question',
    component: FirstQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
