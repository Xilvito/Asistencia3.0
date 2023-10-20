import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(private http: HttpClient) { }

  urlApi = "https://one-piece-episodes.p.rapidapi.com/one_piece/seasons" 

  obtenerAsesores(): Observable<any>
  {
    return this.http.get('https://one-piece-episodes.p.rapidapi.com/one_piece/seasons', {
      headers: {
      'X-RapidAPI-Key': '95d6dadc0amshfbfd14d50c65499p169205jsnd1b7d7d1ef0e',
      'X-RapidAPI-Host': 'one-piece-episodes.p.rapidapi.com'
    },
    params: {language: 'es'}
    });
  }


  obtener()
  {

  }

  crear()
  {

  }

  eliminar()
  {

  }
  
  modificar()
  {

  }
}
