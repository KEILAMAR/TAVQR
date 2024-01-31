import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imaterias } from 'src/app/interfaces/imaterias';
import { CrudfirebaseService } from 'src/app/services/Firebase/crudfirebase.service';

@Component({
  selector: 'app-detailclass',
  templateUrl: './detailclass.page.html',
  styleUrls: ['./detailclass.page.scss'],
})
export class DetailclassPage implements OnInit {


  materia!: Imaterias | undefined;



  constructor(
    private fire: CrudfirebaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    const auxID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(auxID);
  }

  ionViewWillEnter() {
    this.getMateria(this.getId());
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/", 4)
    let id = aux[3]
    return id
  }

  getMateria(id: string) {
    const auxID = this.activatedRoute.snapshot.paramMap.get('id');
    if (auxID) {
      this.fire.getmatById('Materias', auxID).subscribe((materia) => {
        console.log(materia);
        this.materia = materia || {} as Imaterias;
        this.materia.id = auxID;
      });
    }
  }

  eliminar() {
    const auxID = this.activatedRoute.snapshot.paramMap.get('id');
    if (auxID) {
      this.fire.deleteDocument('Pizzas', auxID);
      this.router.navigate(['/pizzas']);
    }
  }
}
