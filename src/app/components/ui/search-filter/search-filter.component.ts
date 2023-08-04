import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnChanges {
  @Input() form!: FormGroup;
  @Input() isOpen: boolean = false;
  @ViewChild('search') input: ElementRef | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'].currentValue === true) {
      this.input?.nativeElement.focus();
    }
  }

  focusOnInput(input: HTMLInputElement) {
    input?.focus();
  }
}
