import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {
  inputArray = [['team1','dep1','tkt1'], ['team2','dep1','tkt2'], ['team2','dep3','tkt75'], ['team2','dep1','tkt10']];
  outputArray:IOutputArray[] = [];
  constructor() { }

  ngOnInit(): void {
    this.handlerInputArray(this.inputArray);
  }

  handlerInputArray(inputArray) {
    inputArray.map((value, key) => {
      let indexFound:any = this.iterateArrayToFind(this.outputArray, value[0]);

      if(indexFound == null) {
        let objPush:IOutputArray = {
          dependencies: [{
            name: value[1],
            tickets: [{
              name: value[2]
            }]
          }],
          name : value[0]
        }
        this.outputArray.push(objPush);

      } else {
        let indexFoundDependencie = this.iterateArrayToFind(this.outputArray[indexFound].dependencies, value[1]);
        
        if(indexFoundDependencie == null) {
          let objDependencie:IDependecie = {
            name: value[1],
            tickets: [{
              name: value[2]
            }]
          };
          this.outputArray[indexFound].dependencies.push(objDependencie)
        } else {
          this.outputArray[indexFound].dependencies[indexFoundDependencie].tickets.push({
            name: value[2]
          })
        }
        /*for(let j = 0; j < this.outputArray[indexFound].dependencies.length; j++) {
          
        }
        this.outputArray[indexFound].dependencies*/
      }
      console.log('Finish iteration');
    })
    console.log(this.outputArray)
  }

  iterateArrayToFind(arrayIterate, valueToFind) {
    let indexFound:any = null;
    for(let i = 0; i < arrayIterate.length; i++) {
      if(arrayIterate[i].name == valueToFind) {
        indexFound = i;
        break;
      }
    }

    return indexFound;
  }

}

export interface IOutputArray {
  dependencies:IDependecie[];
  name:string
}

export interface IDependecie {
  name:string;
  tickets:ITicket[];

}

export interface ITicket {
  name:string;
}