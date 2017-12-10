import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Funcao } from './funcao.model';


@Injectable()
export class FuncionariosService {
    API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }
    /* AINDA NÃO TÁ PEGANDO AS FUNÇÕES */

    getFuncionarios(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/funcionarios?_expand=pessoa&_expand=cargo');
    }
    getFuncionario(id: number): Observable<any> {
        return this.http.get(this.API_URL + '/funcionarios/' + id + '?_expand=pessoa&_expand=cargo');
    }

    getFuncionarioFuncao(id: number): Observable<any> {
        return this.http.get(this.API_URL + '/funcionarios/' + id + '?_expand=funcao');
    }

    addFuncionario(pessoaId: number, cargoId: number, funcoesId: Array<Funcao>, tipo: string): Observable<any> {
        const funcionario = { 'pessoaId': pessoaId, 'cargoId': cargoId, 'funcoes': funcoesId, tipo: tipo };
        return this.http.post(this.API_URL + '/funcionarios', funcionario);
    }

    updateFuncionario(idURL: number, pessoaId: number, cargoId: number, funcoesId: Array<Funcao>, tipo: string): Observable<any> {
        const funcionario = { 'pessoaId': pessoaId, 'cargoId': cargoId, 'funcoes': funcoesId, tipo: tipo };
        return this.http.patch(this.API_URL + '/funcionarios/' + idURL, funcionario);
    }

    deleteFuncionario(idURL: number) {
        return this.http.delete(this.API_URL + '/funcionarios/' + idURL);
    }
}