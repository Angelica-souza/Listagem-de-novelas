import { Component } from '@angular/core';
import { NovelaService } from './Services/novela.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'novelas';
  
  constructor() { }

}
