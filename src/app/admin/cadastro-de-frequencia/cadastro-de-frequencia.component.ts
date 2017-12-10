import { Component, OnInit } from '@angular/core';
import { Funcao } from '../funcao.model';
import { FrequenciasService } from "../frequencias.service";
import { PessoasService } from '../pessoas.service';
import { ActivatedRoute } from "@angular/router";
import { CargosService } from '../cargos.services';
import { FuncoesService } from '../funcoes.services';

@Component({
  selector: 'app-cadastro-de-frequencia',
  templateUrl: './cadastro-de-frequencia.component.html',
  styleUrls: ['./cadastro-de-frequencia.component.css']
})
export class CadastroDeFrequenciaComponent implements OnInit {
  idURL = null;
  alunoId = null;
  turmaId = null;
  disciplinaId = null;
  professorId = null;
  horarioId = null;
  status = null;
  data = null;
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;
  turmas = [];
  disciplinas = [];
  professores = [];
  horarios = [];
  alunos = [];

  constructor(private frequenciasService: FrequenciasService,
    private route: ActivatedRoute,
    private pessoasService: PessoasService,
    private cargosService: CargosService,
    private funcoesService: FuncoesService) {
  }

  ngOnInit() {
    this.frequenciasService.getAlunos().subscribe(alunos => this.alunos = alunos);
    this.frequenciasService.getTurmas().subscribe(turmas => this.turmas = turmas);
    this.frequenciasService.getDisciplinas().subscribe(disciplinas => this.disciplinas = disciplinas);
    this.frequenciasService.getHorarios().subscribe(horarios => this.horarios = horarios);
    this.frequenciasService.getProfessores().subscribe(professores => this.professores = professores);
  }

  salvar() {
    const frequenciaAluno = {"turmaId": this.turmaId, 
                            "professorId": this.professorId, 
                            "horarioId": this.horarioId,
                            "alunoId": this.alunoId,
                            "disciplinaId": this.disciplinaId,
                            data: this.data,
                            status: this.status,
                          };
    this.frequenciasService.addFrequencia(frequenciaAluno)
      .subscribe(funcionario => {
        console.log(funcionario);
        this.cadastro_ok = true;
        this.cadastro_erro = false;
        this.turmaId = null;
        this.professorId = null;
        this.horarioId = null;
        this.alunoId = null;
        this.disciplinaId = null;
        this.data = null;
        this.status = null;
      },
      erro => {
        this.cadastro_ok = false;
        this.cadastro_erro = true;
      });
  }
}
