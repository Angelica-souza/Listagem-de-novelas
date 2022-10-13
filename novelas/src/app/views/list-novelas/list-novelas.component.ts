import { Component, OnInit } from '@angular/core';
import { NovelaService } from 'src/app/Services/novela.service';

@Component({
  selector: 'app-list-novelas',
  templateUrl: './list-novelas.component.html',
  styleUrls: ['./list-novelas.component.scss']
})
export class ListNovelasComponent implements OnInit {
  
  novelas: Array<any> = new Array();

  constructor(private novelaServive: NovelaService) { }

  ngOnInit(): void {
    this.listarTodasNovelas();
  }

  listarTodasNovelas() {
    this.novelaServive.listarNovela()
      .then(
        novela => {
          this.novelas = novela;
        }
      )
      .catch(console.log);
  }

}
