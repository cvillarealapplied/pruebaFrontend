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
    nextURL = '';
    prevURL = '';
    characterList:ICharacter[];
    tempCharacterList:ICharacter[];
    formControl = new FormControl();

    constructor(
        private _characterService: CharacterService
    ) {

    }

    ngOnInit() {
        this.handlerGetCharacters(this.currentUrl);
        this.handlerFilterCharacters();
    }

    handlerGetCharacters(url) {
        this._characterService.getCharactersByPage(url).subscribe(
            result => {
                const characterCommand:ICharacterCommand = result;
                this.nextURL           = characterCommand.info.next;
                this.prevURL           = characterCommand.info.prev;
                this.characterList     = characterCommand.results;
                this.tempCharacterList = characterCommand.results;this.characterList = this.tempCharacterList.filter(element => (element.name.toLowerCase()).includes((this.formControl.value || '').toLowerCase()));
            }
        );
    }

    prevNextPage(direction:number) {
        if(direction == PREV_DIRECTION && this.prevURL != '') {
            this.handlerGetCharacters(this.prevURL);
        } else if(direction == NEXT_DIRECTION && this.nextURL != '') {
            this.handlerGetCharacters(this.nextURL);
        }
    }

    handlerFilterCharacters() {
        this.formControl.valueChanges
            .pipe(
                debounceTime(400)
            ).subscribe(value => {
                console.log(value);
                this.characterList = this.tempCharacterList.filter(element => (element.name.toLowerCase()).includes(value.toLowerCase()));
            });
    }

}

export const PREV_DIRECTION = 1;
export const NEXT_DIRECTION = 2;