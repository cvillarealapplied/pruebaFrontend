import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ICharacter, ICharacterCommand } from "src/app/interfaces/ICharacter";
import { debounceTime } from 'rxjs/operators';
import { CharacterService } from "./characters.service";

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
    currentUrl = 'https://rickandmortyapi.com/api/character';
    characterList:ICharacter[];
    tempCharacterList:ICharacter[];

    constructor(
        private _characterService: CharacterService
    ) {

    }

    ngOnInit() {
        this.handlerGetCharacters(this.currentUrl);
    }

    handlerGetCharacters(url) {
        this._characterService.getCharactersByPage(url).subscribe(
            result => {
                console.log(result);
                const characterCommand:ICharacterCommand = result;
                this.characterList     = characterCommand.results;
                this.tempCharacterList = characterCommand.results;
            }
        );
    }

}