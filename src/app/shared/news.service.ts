import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private firestore: AngularFirestore) { }
 
  getIndia()
  
  {
    return this.firestore.collection('india').snapshotChanges();
  }

  getWorld() {
    return this.firestore.collection('world').snapshotChanges();
  }
  GetBreak() {
    return this.firestore.collection('breaknewz').snapshotChanges();
  }

  getSports() {
    return this.firestore.collection('sports').snapshotChanges();
  }

  getMovies() {
    return this.firestore.collection('movies').snapshotChanges();
  }

  getBusiness() {
    return this.firestore.collection('business').snapshotChanges();
  }

}


