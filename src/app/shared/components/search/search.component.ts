import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class SearchComponent {
  @Input() placeholder = 'Search...';
  @Output() onSearch = new EventEmitter<string>();

  searchValue = '';

  handleSearch(): void {
    this.onSearch.emit(this.searchValue.trim());
  }
}
