import { Injectable } from '@angular/core';
import {TicTac} from '../models/tic-tac.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TicTacService {

  ticTacItems: Array<TicTac> = [ {value: 'click me'}, {value: 'click me'}, {value: 'click me'}, {value: 'click me'}, {value: 'click me'},
                                 {value: 'click me'}, {value: 'click me'}, {value: 'click me'}, {value: 'click me'} ];

  currentValue: string = 'X';

  getItems(): Observable<TicTac[]> {
    return Observable.of(this.ticTacItems);
  }

  changeValue(index) {
    if (this.ticTacItems[index].value !== 'click me') { return false; }
    this.ticTacItems[index].value = this.currentValue;
    this.switchValue();
  }

  switchValue(): void {
    if (this.currentValue === 'X') {
      this.currentValue = '0';
    } else {
      this.currentValue = 'X';
    }
  }
}
