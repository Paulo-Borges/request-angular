import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './cursos-lista/curso';
import { tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {

  private readonly API = `${environment.API}cursos`;

  // private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient){}


  list() {
    return this.http.get<Curso[]>(this.API)
    .pipe(tap(console.log));
  }
}
