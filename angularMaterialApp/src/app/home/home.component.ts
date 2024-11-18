import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: any[] = [
    {
      name: 'A',
      description:'This is A'
    },
    {
      name: 'B',
      description:'This is B'
    }
  ];

  removeItem(item: any){
    console.log(item);
    this.items = this.items.filter((eachItem) => JSON.stringify(eachItem) !== JSON.stringify(item) )
  }

  onAddItem(item: any){
    this.items.push(item);

  }
 

}
