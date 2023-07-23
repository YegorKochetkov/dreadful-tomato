import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() isShown = false;

  filtersForm = new FormGroup({
    searchFilter: new FormControl('', [Validators.required]),
    yearFilter: new FormControl(''),
  });

  log() {
    console.log(this.filtersForm.value.yearFilter);
  }
}
