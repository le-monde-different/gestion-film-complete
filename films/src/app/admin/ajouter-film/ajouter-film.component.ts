import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { BdService } from '../../services/bd.service';
import { Router } from '@angular/router';
import { Film } from '../../shared/models/film';
@Component({
  selector: 'app-ajouter-un-film',
  templateUrl: './ajouter-film.component.html',
  styleUrls: ['./ajouter-film.component.css']
})
export class AjouterFilmComponent {

  constructor(private filmsService : FilmsService, private fb: BdService,
    private router : Router
    ) { }
    ajouterFilm(nom : string,desc: string)
    {
    var x = new Film();
    x.nom=nom;
    x.description=desc;
    x.descVisible=false;
    this.fb.ajouterFilm(x).then (res => {alert ("Votre film est ajouté"); this.router.navigate(['/admin']);
    });
    
    }
}