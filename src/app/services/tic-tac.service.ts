import { Injectable } from '@angular/core';
import {TicTac} from '../models/tic-tac.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class TicTacService {

  ticTacItems: Array<TicTac> = [ {value: 'click me'}, {value: 'click me'}, {value: 'click me'}, {value: 'click me'}, {value: 'click me'},
                                 {value: 'click me'}, {value: 'click me'}, {value: 'click me'}, {value: 'click me'} ];

  getItems(): Observable<TicTac[]> {
    return Observable.of(this.ticTacItems);
  }

  changeXValue(index) {
    this.ticTacItems[index].value = 'X';
  }

  changeZeroValue(index) {
    this.ticTacItems[index].value = '0';
  }

}
