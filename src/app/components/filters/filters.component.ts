import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { YearPickerComponent } from '../ui/year-picker/year-picker.component';
import { SearchFilterComponent } from '../ui/search-filter/search-filter.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, YearPickerComponent, SearchFilterComponent],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() isShown = false;
}
