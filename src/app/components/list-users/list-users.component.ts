import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string, 
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', email:'test@teste'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', email:'test@teste'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', email:'test@teste'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', email:'test@teste'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', email:'test@teste'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', email:'test@teste'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', email:'test@teste'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', email:'test@teste'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', email:'test@teste'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', email:'test@teste'},
];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
