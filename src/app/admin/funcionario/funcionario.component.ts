import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncoesService } from '../funcoes.services';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  funcionario;
  funcoes;
  funcoesId: any[];
  
    constructor(private funcionariosService: FuncionariosService,
                private route: ActivatedRoute,
                private router: Router,
                private funcoesService: FuncoesService) {
    }
  
    ngOnInit() {
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.funcionariosService.getFuncionario(id)
        .subscribe(funcionario => this.funcionario = funcionario);

        this.funcoesService.getFuncoes().subscribe(funcoes => this.funcoes = funcoes);
    }

}
