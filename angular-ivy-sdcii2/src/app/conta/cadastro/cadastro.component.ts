import { Component, OnInit } from '@angular/core';
import { Conta } from '../../shared/model/conta';
import { ContaService } from '../../shared/service/conta.service';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  conta: Conta;
  titulo: 'CADASTRO DE CONTAS';

  constructor(private contaService: ContaService) {
    this.conta = new Conta();
  }

  ngOnInit(): void {}

  inserirConta(): void {
    this.contaService.inserir(this.conta);
    //.subscribe((conta) => console.log(conta));

    this.conta = new Conta();
  }
}
