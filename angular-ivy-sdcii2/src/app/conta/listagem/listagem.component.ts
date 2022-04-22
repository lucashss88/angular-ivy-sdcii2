import { Component, OnInit } from '@angular/core';
import { Conta } from '../../shared/model/conta';
import { contas } from '../../shared/model/contas';
import { ContaService } from '../../shared/service/conta.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  contas: Array<Conta>;
  constructor(private contaService: ContaService) {}

  ngOnInit() {
    this.contas = this.contaService.listar();
  }

  editar(conta: Conta): void {
    conta.nome += ' Alterado';
  }

  remover(conta: Conta): void {
    const indxContaARemover = this.contas.findIndex((c) => c.cpf === conta.cpf);
    if (indxContaARemover > -1) {
      this.contas.splice(indxContaARemover, 1);
    }
  }
}
