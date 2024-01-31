import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Imaterias } from 'src/app/interfaces/imaterias';

@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {

  constructor(private fire: AngularFirestore) { }

  getCollection(collectionName:string) {
    return this.fire.collection<Imaterias>(collectionName).valueChanges({ idField: 'id'});
  }

  createDocument(collectionName:string, data:Imaterias) {
    return this.fire.collection<Imaterias>(collectionName).add(data);
  }

  updateDocument(collectionName:string, data:Imaterias, documentId:string) {
    return this.fire.collection<Imaterias>(collectionName).doc(documentId).update(data);
  }

  deleteDocument(collectionName:string, documentId:string) {
    return this.fire.collection<Imaterias>(collectionName).doc(documentId).delete();
  }

  getmatById(collectionName:string, documentId:string) {
    return this.fire.collection<Imaterias>(collectionName).doc(documentId).valueChanges();
  }


}
