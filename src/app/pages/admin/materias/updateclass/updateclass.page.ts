import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imaterias } from 'src/app/interfaces/imaterias';
import { CrudfirebaseService } from 'src/app/services/Firebase/crudfirebase.service';

@Component({
  selector: 'app-updateclass',
  templateUrl: './updateclass.page.html',
  styleUrls: ['./updateclass.page.scss'],
})
export class UpdateclassPage implements OnInit {

  constructor(private fire:CrudfirebaseService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  materia!: Imaterias | undefined;

  ngOnInit() {
    const auxID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(auxID);
  }

  ionViewWillEnter() {
    this.getMaterias(this.getId());
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/", 4)
    let id = aux[3]
    return id
  }

  getMaterias(id: string) {
    const auxID = this.activatedRoute.snapshot.paramMap.get('id');
    if (auxID) {
      this.fire.getmatById('Materias', auxID).subscribe((materia) => {
        this.materia = materia || {} as Imaterias;
        this.materia.id = auxID;
      });
    }
  }
  
  updateMat() {
    const auxID = this.activatedRoute.snapshot.paramMap.get('id');
    if (auxID && this.materia) {
      this.fire.updateDocument('materia',this.materia,auxID);
      this.router.navigate(['/home-adm'])
    }
  }

}
