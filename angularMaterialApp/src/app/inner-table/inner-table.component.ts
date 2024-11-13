import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-table',
  templateUrl: './inner-table.component.html',
  styleUrl: './inner-table.component.css'
})
export class InnerTableComponent {
  @Input() dataSource: any[] = [];
  @Input() columns: any[] = [];
  @Input() displayedColumns: any[]= [];
  nestedColumn = ['nested'];

}
