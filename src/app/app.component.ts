import {Component, OnInit} from '@angular/core';
import {TicTac} from './models/tic-tac.model';
import {TicTacService} from './services/tic-tac.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Tic Tac Toe app';
  items: Array<TicTac>;
  description: string = 'Click once for \'X\' and twice for \'0\'';

  constructor(private ticTacService: TicTacService) {}

  ngOnInit() {
    this.ticTacService.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
  }

  onClick(index) {
    this.ticTacService.changeXValue(index);
  }

  onDblClick(index) {
    this.ticTacService.changeZeroValue(index);
  }

}
