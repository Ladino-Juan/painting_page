import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

const material = [
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatTabsModule,
  MatGridListModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatButtonModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
