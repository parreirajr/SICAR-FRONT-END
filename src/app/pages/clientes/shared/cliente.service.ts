import { Injectable, Injector } from '@angular/core';
import { Cliente } from './cliente.model';

import { BaseResourceService } from '../../../shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseResourceService<Cliente> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/clientes', injector, Cliente.fromJson);
  }
}
