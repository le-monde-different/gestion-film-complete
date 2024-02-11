import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../shared/models/film';
import { FilmsService } from '../../services/films.service';
import { BdService } from '../../services/bd.service';
@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit{
  nomFilm : any ='Affiche le nom du film';
  descFilm : any ='Affiche la description du film';
  id: string ="";
  film?:any;
  constructor (private route : ActivatedRoute, private filmsService : FilmsService ,private fb:BdService){}
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    //this.nomFilm = this.fb.getFilm(this.id);
    //this.descFilm =
    //this.filmsService.getFilmParId(+id).description;
    this.fb.getFilm(this.id).subscribe (res => {   
      this.film=res;
      this.nomFilm=this.film.payload.data().nom;
      this.descFilm=this.film.payload.data().description;})
    }   
  }
    