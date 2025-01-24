import { NgModule } from '@angular/core';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'

@NgModule({
  imports: [MatListModule, MatDividerModule],
  exports: [MatListModule],
})
export class AngularMaterialModule {}
