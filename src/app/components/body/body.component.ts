import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.mode';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 persona: persona = null;
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona() {
    this.personaService.detail(1).subscribe(data=>{
      this.persona = data;
     }
   )
 }

}
