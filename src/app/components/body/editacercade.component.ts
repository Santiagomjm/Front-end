import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.mode';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {
persona: persona= null;
  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert('error al modificar la persona');
        this.router.navigate(['']);
      }
    )

  }

  uploadImage($event: any){

  }

}
