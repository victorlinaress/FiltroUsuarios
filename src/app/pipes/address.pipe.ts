import { Pipe, PipeTransform } from '@angular/core';
import { IAdress } from '../interfaces/user/adress.interface';

@Pipe({
  name: 'address',
  standalone: false,
})
export class AddressPipe implements PipeTransform {
  transform(address: IAdress): string {
    const INVALID_ADRESS =
      !address ||
      !address.rua ||
      !address.cidade ||
      !address.estado ||
      address.numero === null ||
      address.numero === undefined;

    if (INVALID_ADRESS) {
      return 'endereço indisponível ou inválido';
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }
}
