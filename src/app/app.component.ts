import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TicTac} from './models/tic-tac.model';
import {TicTacService} from './services/tic-tac.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title: string = 'Tic Tac Toe app';
  items: Array<TicTac>;

  constructor(private ticTacService: TicTacService) {}

  ngOnInit() {
    this.ticTacService.getItems().subscribe(items => {
      this.items = items;
    });
  }
  onValueChanging(index) {
    this.ticTacService.changeValue(index);
  }
}
