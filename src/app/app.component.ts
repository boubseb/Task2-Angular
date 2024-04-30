import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BlockComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  blockCount: number[] = [0, 1, 2, 3];
  title = 'firstApp';
}
