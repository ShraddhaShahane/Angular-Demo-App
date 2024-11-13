import { Component, OnInit } from '@angular/core';

const rowData = [
  {
    "vin":"ee8a89d8",
    "brand":"Fiat",
    "year":1987,
    "color":"Maroon"
},
{
    "vin":"642b3edc",
    "brand":"Renault",
    "year":1968,
    "color":"White"
},
{
    "vin":"19ec7580",
    "brand":"Renault",
    "year":1981,
    "color":"Black"
},
{
    "vin":"39980f30",
    "brand":"VW",
    "year":1986,
    "color":"Red"
},
{
    "vin":"ec9cc4e4",
    "brand":"Fiat",
    "year":1981,
    "color":"Brown"
},
{
    "vin":"09a06548",
    "brand":"VW",
    "year":1965,
    "color":"Green"
},
{
    "vin":"05c47246",
    "brand":"Mercedes",
    "year":2007,
    "color":"Blue"
},
{
    "vin":"a9cb87aa",
    "brand":"Fiat",
    "year":1962,
    "color":"Green"
},
{
    "vin":"eae758fa",
    "brand":"BMW",
    "year":1999,
    "color":"Yellow"
},
{
    "vin":"1241c403",
    "brand":"Jaguar",
    "year":1964,
    "color":"Yellow"
},
{
    "vin":"13f853a7",
    "brand":"Honda",
    "year":2006,
    "color":"White"
},
{
    "vin":"447d9ed9",
    "brand":"Jaguar",
    "year":2005,
    "color":"Orange"
},
{
    "vin":"78fa052e",
    "brand":"Jaguar",
    "year":1990,
    "color":"Orange"
},
{
    "vin":"8b77772a",
    "brand":"Mercedes",
    "year":1991,
    "color":"Blue"
},
{
    "vin":"23ba7e86",
    "brand":"Honda",
    "year":1975,
    "color":"Yellow"
},
{
    "vin":"9bacb32d",
    "brand":"Volvo",
    "year":1968,
    "color":"Brown"
},
{
    "vin":"62094d91",
    "brand":"Mercedes",
    "year":1962,
    "color":"Green"
},
{
    "vin":"dc7003f4",
    "brand":"Jaguar",
    "year":1976,
    "color":"Maroon"
},
{
    "vin":"08607aef",
    "brand":"Mercedes",
    "year":1987,
    "color":"Maroon"
},
{
    "vin":"45eee33a",
    "brand":"BMW",
    "year":1980,
    "color":"Silver"
},
{
    "vin":"f199ec5c",
    "brand":"Jaguar",
    "year":1961,
    "color":"Green"
},
{
    "vin":"b34cd9e8",
    "brand":"VW",
    "year":1993,
    "color":"Silver"
},
{
    "vin":"54b20b02",
    "brand":"Renault",
    "year":1967,
    "color":"Brown"
},
{
    "vin":"5dd8766e",
    "brand":"Honda",
    "year":1998,
    "color":"Orange"
},
{
    "vin":"df50ce22",
    "brand":"Mercedes",
    "year":1964,
    "color":"White"
},
{
    "vin":"ecb3e9e1",
    "brand":"Honda",
    "year":2003,
    "color":"Silver"
},
{
    "vin":"750d731d",
    "brand":"Renault",
    "year":1962,
    "color":"Blue"
},
{
    "vin":"bec38cf4",
    "brand":"Renault",
    "year":1960,
    "color":"Blue"
},
{
    "vin":"b7752002",
    "brand":"Jaguar",
    "year":1964,
    "color":"Black"
},
{
    "vin":"315fe9c4",
    "brand":"Fiat",
    "year":1985,
    "color":"Red"
},
{
    "vin":"be65f786",
    "brand":"Mercedes",
    "year":1963,
    "color":"Orange"
},
{
    "vin":"786a7d57",
    "brand":"Mercedes",
    "year":2003,
    "color":"Black"
},
{
    "vin":"a3aee412",
    "brand":"Volvo",
    "year":2003,
    "color":"Maroon"
},
{
    "vin":"749e6bdd",
    "brand":"Audi",
    "year":1995,
    "color":"Brown"
},
{
    "vin":"8cc40f50",
    "brand":"BMW",
    "year":1961,
    "color":"Brown"
},
{
    "vin":"5de63a6f",
    "brand":"Renault",
    "year":1961,
    "color":"White"
},
{
    "vin":"bdae1e20",
    "brand":"Jaguar",
    "year":2008,
    "color":"Blue"
},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false
})
export class HomeComponent implements OnInit {

  dataSource: any[] = rowData;
  columns = [
    {
      columnDef: 'vin',
      header: 'vin',
      cell: (element: any) => `${element.vin}`,
    },
    {
      columnDef: 'brand',
      header: 'Brand',
      cell: (element: any) => `${element.brand}`,
    },
    {
      columnDef: 'year',
      header: 'year',
      cell: (element: any) => `${element.year}`,
    },
    {
      columnDef: 'color',
      header: 'color',
      cell: (element: any) => `${element.color}`,
    },
  ];
  displayedColumns = this.columns.map(c => c.columnDef);
  nestedColumn = ['nested'];
  groupByColumns = ['brand', 'color'];

  constructor(){
    this.dataSource = this.groupByAll(this.dataSource, 0, this.groupByColumns); 
    this.displayedColumns = this.displayedColumns.filter((dCol) => !this.groupByColumns.includes(dCol));

  }

  ngOnInit() {
  }

  groupByAll(arr: any[], level: number, groupByColumns: string[]): any[]{
    if(level > groupByColumns.length){
        return arr;
    }
    let property = groupByColumns[0];  
    let children: any[] = arr.reduce((previous, value)=>{
        previous[value[property]] = previous[value[property]] ? [...previous[value[property]], value] : [value];
        return previous;
      }, {});
      
      const res = Object.entries(children).map(([label, options]) =>  ({
            label,
            isGroup: true,
            level: level,
            groupByProperty: property,
            propertyValue:  label,
            children: this.groupByAll(options, level + 1, groupByColumns.filter(val => val !== property))
          }))     
      return res;   
       
  }
 
}
