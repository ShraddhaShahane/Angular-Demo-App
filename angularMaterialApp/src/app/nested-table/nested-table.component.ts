import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';

interface NestedItem {
  name: string;
  description: string;
  children?: NestedItem[]; // This allows for the recursive nature
}


@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrl: './nested-table.component.css'
})
export class NestedTableComponent {
  displayedColumns: string[] = ['name', 'description', 'actions'];

  // Sample recursive data structure
  dataSource: any[] = [
    {
      // name: 'Item 1',
      // description: 'Description of Item 1',
      children: [
        {
          name: 'Item 1.1',
          description: 'Description of Item 1.1',
          children: [
            { name: 'Item 1.1.1', description: 'Description of Item 1.1.1' , 
              children:[
                {
                  name: 'test1',
                  description: 'test1 des'
                }
              ]
            },
            { name: 'Item 1.1.2', description: 'Description of Item 1.1.2' }
          ]
        },
        { name: 'Item 1.2', description: 'Description of Item 1.2' }
      ]
    },
    {
      name: 'Item 2',
      description: 'Description of Item 2',
      children: [
        { name: 'Item 2.1', description: 'Description of Item 2.1' }
      ]
    }
  ];
}


