import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class FrequenciasService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/disciplinas');
  }

  getTurmas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/turmas');
  }

  getProfessores(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/professors ');
  }

  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/horarios');
  }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/alunos');
  }

  getFrequencias(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/frequencias?_expand=disciplina&_expand=turma&_expand=aluno&_expand=professor&_expand=horario');
  }

  addFrequencia(frequenciaAluno): Observable<any> {
    return this.http.post(this.API_URL + '/frequencias', frequenciaAluno);
  }
}