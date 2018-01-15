import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TicTac } from '../../models/tic-tac.model';

@Component({
  selector: 'app-tic-tac',
  templateUrl: './tic-tac.component.html',
  styleUrls: ['./tic-tac.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicTacComponent {

  @Input() item: TicTac;

  constructor() { }

}
