import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Root {
  info: Info
  results: Result[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: any
}

export interface Result {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}


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
