import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NovelaModel } from 'src/app/Interface/novela.model';

import { NovelaService } from 'src/app/Services/novela.service';

@Component({
  selector: 'app-register-novela',
  templateUrl: './register-novela.component.html',
  styleUrls: ['./register-novela.component.scss']
})
export class RegisterNovelaComponent implements OnInit {

  novela: NovelaModel = new NovelaModel();

  constructor(private router: Router, private novelaServive: NovelaService) { }

  ngOnInit(): void {
  }

  async register() {
    try {
      console.log(this.novela);
  
      await this.novelaServive.registerNovela(this.novela);

      this.router.navigate(['']);
    } catch (err) {
      console.log(err);
    }
  }

}
