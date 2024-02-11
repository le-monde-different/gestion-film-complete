import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../shared/models/film';
import { BdService } from '../../services/bd.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-liste-des-films',
  templateUrl: './lister-films.component.html',
  styleUrls: ['./lister-films.component.css']
})
export class ListerFilmsComponent implements OnInit{
  tabFilms?: any;
  constructor (private filmService : FilmsService ,private fb :BdService) {}
  ngOnInit() : void {
    //this.tabFilms=this.filmService.getFilms();
    this.recupererFilms();
    
  }
  recupererFilms ()
  {
    this.fb.getFilms().snapshotChanges().subscribe(data=>{this.tabFilms=data;
                                                          console.log(data);});
  }
  //supprimer(str : any) : void {this.filmService.deleteFilm(str)}
  supprimer(cle : any)
  {
    this.fb.supprimerFilm(cle);
  }
}