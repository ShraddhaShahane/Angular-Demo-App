import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css'
})
export class NewItemComponent {
  addForm: FormGroup;
  @Output() addItem = new EventEmitter();

  constructor(private fb: FormBuilder,){
    this.addForm = this.fb.group({
      name: [''],
      description: ['']
    });

  }

  ngOnInit() {
    
  }

  add(){
  let item = this.addForm.value;
  this.addItem.emit(item);    
  }
}
