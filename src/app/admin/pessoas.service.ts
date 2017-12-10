import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class PessoasService {
    API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getPessoas(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/pessoas');
    }
    getPessoa(id: number): Observable<any> {
        return this.http.get(this.API_URL + '/pessoas/' + id);
    }

    addPessoa(id: number, nome: string, email: string): Observable<any> {
        const pessoa = { id: id, nome: nome, email: email };
        return this.http.post(this.API_URL + '/pessoas', pessoa);
    }

    updatePessoa(idURL: number, id: number, nome: string, email: string): Observable<any> {
        const pessoa = { id: id, nome: nome, email: email };
        return this.http.patch(this.API_URL + '/pessoas/' + idURL, pessoa);
    }

    deletePessoa(idURL: number) {
        return this.http.delete(this.API_URL + '/pessoas/' + idURL);
    }
}