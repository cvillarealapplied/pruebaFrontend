import { Component, Input } from "@angular/core";
import { ICharacter } from "src/app/interfaces/ICharacter";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() character:ICharacter;
}