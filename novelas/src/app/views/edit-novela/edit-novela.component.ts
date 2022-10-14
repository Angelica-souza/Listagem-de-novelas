import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NovelaModel } from 'src/app/Interface/novela.model';
import { NovelaService } from 'src/app/Services/novela.service';

@Component({
  selector: 'app-edit-novela',
  templateUrl: './edit-novela.component.html',
  styleUrls: ['./edit-novela.component.scss']
})
export class EditNovelaComponent implements OnInit {
  
  novelas: Array<any> = new Array();

  constructor(private router: Router, private novelaServive: NovelaService) { }

  ngOnInit(): void {

  }

  async edit() {
    console.log(this.novelas);
  }

}
