import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item: any;
  @Output() remove = new EventEmitter();


  onRemove(item: any){
    this.remove.emit(item);
  }
}
