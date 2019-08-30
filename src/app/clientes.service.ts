import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClienteModel} from './clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {
  }

  listarClientes(): Observable<any> {
    return this.http.get('http://localhost:8080/api/cliente');
  }

  cadastrarCliete(cliente: ClienteModel): Observable<any> {
    return this.http.put('http://localhost:8080/api/cliente', cliente);
  }

  removerCliente(id: any): Observable<any> {
    return this.http.delete('http://localhost:8080/api/cliente/'.concat(id));
  }


}
