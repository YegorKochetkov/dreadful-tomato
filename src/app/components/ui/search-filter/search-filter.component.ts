import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  @Input() public form!: FormGroup;

  focusOnInput(input: HTMLInputElement) {
    input.focus();
  }
}
