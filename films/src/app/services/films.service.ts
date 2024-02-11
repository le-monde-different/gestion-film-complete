import { Injectable } from '@angular/core';
import { FILMS } from '../shared/models/des-films';
import { Film } from '../shared/models/film';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films : Film[]=FILMS
  constructor() { }
  getFilms () : Film []
  {
    return this.films;
  }
  modifierFilm(id:number,n:string,d:string):void{
    this.films[id].nom=n;
    this.films[id].description=d;
  }
  deleteFilm(nomFilm : any) : void {
    
    
    console.log(this.films.length)
     let i=0;
     while (i<this.films.length)
     {
      if (this.films[i].nom==nomFilm) {this.films.splice(i,1);}
      i++;
     }
      }
      getFilmParId (id : number) : Film  {
        return this.films[id-1]
      }
  ajouterFilm(nvNom : any ,nvDesc : any) : void {
    const nvFilm : Film = {id : '',nom:nvNom,description:nvDesc,descVisible : true,
      afficheDesc():void{
      this.descVisible=true;
      },
      cacherDesc():void{
    this.descVisible=false;
      }
    }
    if (this.films.length==0) { nvFilm.id='1'; this.films.push(nvFilm)}
    else {
      let l=FILMS.length;
      nvFilm.id=String ((this.films.length)+1);
      this.films.push(nvFilm) 
    
  }
  alert("Votre film est ajouté");
  history.back()
  }


}