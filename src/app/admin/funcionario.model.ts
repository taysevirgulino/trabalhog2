import {Pessoa} from "./pessoa.model";
import {Cargo} from "./cargo.model";
import {Funcao} from "./funcao.model";

export class Funcionario {
  constructor(public id: number,
              public pessoa: Pessoa,
              public cargo: Cargo,
              public funcoes: Array<Funcao>) {
  }
}