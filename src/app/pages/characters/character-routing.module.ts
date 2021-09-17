import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters.component';

const routes: Routes = [
    {
        path: '',
        component: CharactersComponent,
        children: [
            {
                path: '',
                component: CharactersComponent
            }
        ]
    },

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharacterRoutingModule {
}
