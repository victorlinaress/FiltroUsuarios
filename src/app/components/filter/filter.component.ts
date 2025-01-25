import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,

  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  foods = [{
    value: 'test',
    viewValue: 'Teste'
  }

  ]

}
