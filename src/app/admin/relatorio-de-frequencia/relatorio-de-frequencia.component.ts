import { Component, OnInit } from '@angular/core';
import { FrequenciasService } from '../frequencias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncoesService } from '../funcoes.services';

@Component({
  selector: 'app-relatorio-de-frequencia',
  templateUrl: './relatorio-de-frequencia.component.html',
  styleUrls: ['./relatorio-de-frequencia.component.css']
})
export class RelatorioDeFrequenciaComponent implements OnInit {
  frequencias = [];
  presenca = 0;
  falta = 0;

  constructor(private frequenciasService: FrequenciasService) {
  }

  ngOnInit() {
    this.atualizarRelatorio();
  }

  atualizarRelatorio() {
    this.frequenciasService.getFrequencias()
      .subscribe(frequencias => this.frequencias = frequencias);
  }

  statusAluno(status){
    if(status == 'F'){
      this.falta = 1;
    }
    else{
      this.presenca = 1
    }
  }
}

