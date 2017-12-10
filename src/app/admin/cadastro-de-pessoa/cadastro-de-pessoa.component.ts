import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastro-de-pessoa',
  templateUrl: './cadastro-de-pessoa.component.html',
  styleUrls: ['./cadastro-de-pessoa.component.css']
})
export class CadastroDePessoaComponent implements OnInit {
  idURL = null;
  id = null;
  nome = null;
  email = null;
  public cadastrar_pessoa = "Cadastro";
  cadastro_ok = false;
  cadastro_erro = false;
  atualizar_ok = false;
  atualizar_erro = false;

 constructor(private pessoasService: PessoasService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.idURL = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.idURL) {
      this.cadastrar_pessoa = "Edição"
      this.pessoasService.getPessoa(this.idURL)
        .subscribe(pessoa => {
          this.id = pessoa.id;
          this.nome = pessoa.nome;
          this.email = pessoa.email;
        });
    }
  }

  salvar() {
    if (this.idURL) {
      this.pessoasService.updatePessoa(this.idURL, this.id, this.nome, this.email)
        .subscribe(pessoa => {
            this.atualizar_ok = true;
            this.atualizar_erro = false;
          },
          erro => {
            this.atualizar_ok = false;
            this.atualizar_erro = true;
          });
    } else {
      this.pessoasService.addPessoa(this.id, this.nome, this.email)
        .subscribe(pessoa => {
            console.log(pessoa);
            this.cadastro_ok = true;
            this.cadastro_erro = false;
            this.id = null;
            this.nome = null;
            this.email = null;
          },
          erro => {
            this.cadastro_ok = false;
            this.cadastro_erro = true;
          });
    }
  }

}
