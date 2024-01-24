import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  public asistencias :any[];
  
  constructor() {
    this.asistencias = [];
  }

  ngOnInit() {
    this.asistencias = [
      {
        group: 'Presente',
        items: [
          'Miercoles 9 de Octubre 2024',
          'Viernes 11 de Octubre 2024'
        ]
      },
      {
        group: 'Ausente',
        items: [
          'Miercoles 25 de Agosto 2024',
          'Lunes 30 de Agosto 2024'
        ]
      },
      {
        group: 'Justificado',
        items: [
          'Viernes 4 de Octubre 2024'
        ]
      }
      
    ];

  }

}
