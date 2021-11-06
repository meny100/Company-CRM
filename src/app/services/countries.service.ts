import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries$:Observable<any[]>;;

  constructor(private http: HttpClient) {
    this.countries$ = this.http.get("https://restcountries.eu/rest/v2/all") as Observable<any[]>;}

  onUpdateAddress(RFG:FormGroup, $event: string){
    RFG.get('address')?.setValue($event);
  }
}
