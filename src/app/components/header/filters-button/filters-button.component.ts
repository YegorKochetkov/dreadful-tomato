import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-filters-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters-button.component.html',
  styleUrls: ['./filters-button.component.scss'],
})
export class FiltersButtonComponent implements OnDestroy {
  @Output() toggleFiltersDisplay = new EventEmitter();

  ngOnDestroy() {
    this.toggleFiltersDisplay.emit();
  }
}
