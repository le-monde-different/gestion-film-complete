import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Film } from '../shared/models/film';
@Injectable({
  providedIn: 'root'
})
export class BdService {

  constructor(private fb:AngularFirestore) { }
  //ajouterFilm : ajoute un film dans la base de données
ajouterFilm(film :Film) {
  return this.fb.collection('films').add({...film});
  }
  //getFilms : retourne tous les films qui se trouvent dans la base de données
  getFilms() : AngularFirestoreCollection<Film>{

  return this.fb.collection("films");
  }
  //getFilm : retourne un seul film connaissant sa clé dans la base de données
  getFilm(cleFilm:any)
  {
  return this.fb.collection("films").doc(cleFilm).snapshotChanges();
  }
  //supprimerFilm : supprime un film de la base de données connaissant sa clé

  supprimerFilm(cleFilm:any){
  return this.fb.collection('films').doc(cleFilm).delete();
  }
  //modifierFilm : met à jour un film de la base de données
  modifierFilm(cleFilm:any, value:Film){
  return this.fb.collection('films').doc(cleFilm).update({nom:value.nom,
  description:value.description});
}
}