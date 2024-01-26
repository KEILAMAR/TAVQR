import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  items = [
    { id: 1, name: 'Luis Alvarado', checked: false },
    { id: 2, name: 'Julia Martinez', checked: false },
    { id: 3, name: 'Simon Godoy', checked: false },
  ];

  submit() {
    const checkedItems = this.items.filter((item) => item.checked);
    console.log('Checked items:', checkedItems);
    const checkedItems2 = this.items.filter((item) => item.checked);
    console.log('Checked items2:', checkedItems2);
  }

  constructor() { }

  ngOnInit() {
  }

}
