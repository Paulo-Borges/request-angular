import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from './curso';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  imports: [CommonModule],
  templateUrl: './cursos-lista.html',
  styleUrl: './cursos-lista.scss',
})
export class CursosLista implements OnInit {

  cursos: Curso[] = [];

  cursos$: Observable<Curso[]> | undefined;

  constructor(private service: CursosService){}

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.cursos = dados);
  }
}
