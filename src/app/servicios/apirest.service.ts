import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(private http: HttpClient) { }

  urlApi = "https://pokeapi.co/api/v2/" 
  token = "100"

  obtenerAsesores(): Observable<any>
  {
    return this.http.get(this.urlApi+"obtenerAsesores/"+this.token).pipe();
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
