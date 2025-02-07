import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  standalone: false,

  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterOptions: IFilterOptions = {//valores do iltro
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>(); //criei o evento para o pai
  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions); //dispara para o pai
  }
}
