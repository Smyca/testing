import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../interfaces/rickAndMorty.interface';




@Injectable({
  providedIn: 'root'
})
export class ApiRickService  {
  private url='https://rickandmortyapi.com/api/character'
  constructor(private http:HttpClient) { }



obtenerDatos():Observable<Root>{
  return this.http.get<Root>(this.url)

}

}
