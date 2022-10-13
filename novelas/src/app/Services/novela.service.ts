import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { API_PATH } from 'src/environments/environment';
import { INovela } from '../Interface/iNovelas';

@Injectable({
  providedIn: 'root'
})
export class NovelaService {

  constructor(private httpClient: HttpClient) { }

  listarNovela(): Promise<INovela[]>{
    return lastValueFrom(this.httpClient.get<INovela[]>(`${API_PATH}/novelas`));
  }
}
