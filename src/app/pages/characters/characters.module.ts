import { NgModule } from '@angular/core';

import { CharacterRoutingModule } from './character-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/subs/header/header.component';
import { CharactersComponent } from './components/characters.component';
import { CardComponent } from './components/subs/card/card.component';
import { CharacterService } from './components/characters.service';

@NgModule({
    declarations: [
        HeaderComponent,
        CharactersComponent,
        CardComponent
    ],
    imports: [
        CharacterRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        
    ],
    providers: [
        CharacterService
    ]
})
export class CharactersModule {
}
