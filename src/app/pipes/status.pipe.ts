import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false,
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status === null || !status;

    if (INVALID_STATUS) {
      return 'status indisponível';
    }

    return status ? 'ativo' : 'inativo';
  }
}
