import {Component, OnInit} from '@angular/core';
import {ClientesService} from '../clientes.service';
import {ClienteModel} from './cliente.model';
import {ContatoModel} from './contato.model';
import {EquipamentoModel} from './equipamento.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  contatoCliente: ContatoModel = new ContatoModel();
  contatoEquipamento: ContatoModel = new ContatoModel();
  equipamento: EquipamentoModel = new EquipamentoModel();
  cliente: ClienteModel = new ClienteModel();
  clientes: Array<any> = new Array<any>();

  constructor(private clientesService: ClientesService) {
  }

  ngOnInit() {
    this.listarClientes();
  }

  cadastrar() {
    this.validaCamposFormulario();
    this.clientesService.cadastrarCliete(this.cliente).subscribe(cliente => {
      this.cliente = new ClienteModel();
      this.equipamento = new EquipamentoModel();
      this.contatoCliente = new ContatoModel();
      this.contatoEquipamento = new ContatoModel();
      this.listarClientes();
    }, error => {
      console.log('Erro ao cadastrar um Cliente', error);
    });
  }

  listarClientes() {
    this.clientesService.listarClientes().subscribe(clientes => {
      this.clientes = clientes;
    }, error => {
      console.log('Erro ao listar os Clientes', error);
    });
  }

  remover(id: number) {
    this.clientesService.removerCliente(id).subscribe(clientes => {
      this.listarClientes();
    }, error => {
      console.log('Erro ao remover Cliente', error);
    });
  }

  validaCamposFormulario(): boolean {
    if (this.contatoEquipamento.email == null && this.contatoEquipamento.telefone == null) {
      return false;
    } else {
      this.equipamento.contato = this.contatoEquipamento;
    }
    if (this.equipamento.nome == null && this.equipamento.ip == null) {
      return false;
    } else {
      let equipamento;
      // tslint:disable-next-line:forin
      for (equipamento in this.cliente.equipamentoList) {
        equipamento = this.equipamento;
      }
    }
    if (this.contatoCliente.telefone == null && this.contatoCliente.email == null) {
      return false;
    } else {
      this.cliente.contato = this.contatoCliente;
    }
    return true;
  }
}
