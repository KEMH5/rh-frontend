import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar-items',
  imports: [],
  templateUrl: './side-bar-items.html',
  standalone: true,
  styleUrl: './side-bar-items.css'
})
export class SideBarItems {
  @Input() icon: string = '';
  @Input() desc: string = '';
  @Input() isActive: boolean = false;
  @Output() itemClick = new EventEmitter<void>();

  onItemClick() {
    this.itemClick.emit();
  }
}
