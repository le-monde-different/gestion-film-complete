import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BdService } from '../../services/bd.service';
import { Film } from '../../shared/models/film';
@Component({
  selector: 'app-modifier-film',
  templateUrl: './modifier-film.component.html',
  styleUrls: ['./modifier-film.component.css']
})
export class ModifierFilmComponent implements OnInit{
  nomFilm : string ="";
  descFilm: string="";
  id: string="";
  film :any;
  constructor (private route : ActivatedRoute, private filmsService : FilmsService, private router:Router,private fb:BdService){}

  ngOnInit() {
    this.id =this.route.snapshot.params['id'];
    //this.nomFilm = this.filmsService.getFilmParId(+id).nom;
    //this.descFilm = this.filmsService.getFilmParId(+id).description;
    this.fb.getFilm(this.id).subscribe (res => {   
      this.film=res;
      this.nomFilm=this.film.payload.data().nom;
      this.descFilm=this.film.payload.data().description;})
    }
     soumettre(f: NgForm) {
      console.log(f.value);
      const n =f.value['nom'];
      const d =f.value['desc'];

      const id =this.route.snapshot.params['id'];
      console.log(id);
      //this.filmsService.modifierFilm(id-1,f.value["nom"],f.value["desc"]);
      //this.router.navigate(['admin/liste-des-films'])
      let mfilm : Film = new Film ();
      mfilm.nom=n; mfilm.description=d;
      this.fb.modifierFilm(this.id,mfilm).then( res => { alert ("Votre film a été modifié");
      this.router.navigate(['/admin']);});
    }
}
      