import { Component, OnInit } from '@angular/core';
import { Funcao } from '../funcao.model';
import { FuncionariosService } from "../funcionarios.service";
import { PessoasService } from '../pessoas.service';
import { ActivatedRoute } from "@angular/router";
import { CargosService } from '../cargos.services';
import { FuncoesService } from '../funcoes.services';

@Component({
  selector: 'app-cadastro-de-funcionario',
  templateUrl: './cadastro-de-funcionario.component.html',
  styleUrls: ['./cadastro-de-funcionario.component.css']
})
export class CadastroDeFuncionarioComponent implements OnInit {
  idURL = null;
  id = null;
  tipo = null;
  pessoaId = null;
  cargoId = null;
  funcoesId: any[];
  public cadastrar_funcionario = "Cadastro";
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;
  pessoas = [];
  cargos = [];
  funcoes: any[];

 constructor(private funcionariosService: FuncionariosService, 
              private route: ActivatedRoute, 
              private pessoasService: PessoasService, 
              private cargosService: CargosService, 
              private funcoesService: FuncoesService) {
  }

  ngOnInit() {
    this.idURL = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pessoasService.getPessoas().subscribe(pessoas => this.pessoas = pessoas);
    this.cargosService.getCargos().subscribe(cargos => this.cargos = cargos);
    this.funcoesService.getFuncoes().subscribe(funcoes => this.funcoes = funcoes);
    if (this.idURL) {
      this.cadastrar_funcionario = "Edição"
      this.funcionariosService.getFuncionario(this.idURL)
        .subscribe(funcionario => {
          this.tipo = funcionario.tipo;
          this.pessoaId = funcionario.pessoaId;
          this.cargoId = funcionario.cargoId;
          this.funcoesId = funcionario.funcoes;
        });
    }
  }

  salvar() {
    if (this.idURL) {
      this.funcionariosService.updateFuncionario(this.idURL, this.pessoaId, this.cargoId, this.funcoesId, this.tipo)
        .subscribe(funcionario => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      this.funcionariosService.addFuncionario(this.pessoaId, this.cargoId, this.funcoesId, this.tipo)
        .subscribe(funcionario => {
            console.log(funcionario);
            this.cadastro_ok = true;
            this.cadastro_erro = false;
            this.pessoaId = null;
            this.cargoId = null;
            this.funcoesId = null;
          },
          erro => {
            this.cadastro_ok = false;
            this.cadastro_erro = true;
          });
    }
  }

}
