import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
  public host = 'http://localhost:8888/BILLING-SERVICE/fullBill/1';

  constructor(private http: HttpClient) { }

  getDatas():Observable<any>{
    return this.http.get<any>(this.host)
  }
}
