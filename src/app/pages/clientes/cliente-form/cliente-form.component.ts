import { Component, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Validators } from '@angular/forms';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent extends BaseResourceFormComponent<Cliente> {

constructor(
    protected clienteService: ClienteService,
    protected injector: Injector
  ) {
    super(injector, new Cliente(), clienteService, Cliente.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      cpf: [null, [Validators.required]],
      contato: [null, [Validators.required]]
    });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Nova Categoria';
  }

  protected editionPageTitle(): string {
    const categoryName = this.resource.nome || '';
    return 'Editando Categoria: ' + categoryName;
  }

}
