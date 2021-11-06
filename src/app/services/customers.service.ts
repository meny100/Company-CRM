import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersCollection: AngularFirestoreCollection<Customer>;
  constructor(private afs: AngularFirestore) {
    this.customersCollection = this.afs.collection("customers");
  }

  addCustomer(customer: Customer) {
    this.customersCollection.add(customer);
  }

  updateCustomer(customer: Customer) {
    this.afs.doc(`customers/${customer.id}`).update(customer);

  }

  deleteCustomer(customerId:string) {
    this.afs.doc(`customers/${customerId}`).delete();
  }

  getCustomer(id: string): Observable<Customer | null> {
    return this.afs
      .doc<Customer>(`customers/${id}`)
      .snapshotChanges()
      .pipe(
        map((action) => {
          if (action.payload.exists === false) {
            return null;
          } else {
            const data = action.payload.data() as Customer;
            data.id = action.payload.id;
            return data;
          }
        })
      );
  }

  getCustomers(): Observable<Customer[]> {
    return this.customersCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Customer;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }
}
