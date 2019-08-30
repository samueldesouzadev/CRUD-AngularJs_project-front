import {ContatoModel} from './contato.model';
import {EquipamentoModel} from './equipamento.model';

export class ClienteModel {
  id: number;
  nome: string;
  cnpj: string;
  contato: ContatoModel;
  equipamento: EquipamentoModel;
}
