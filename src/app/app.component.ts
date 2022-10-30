import { Component } from '@angular/core';
import {InvoiceServiceService} from "./service/invoice-service.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoice-yassine-lambarki';

  public data$: any;


  constructor(private invoiceSer: InvoiceServiceService) {}

  ngOnInit() {
    this.onGetData()
  }

  onGetData() {
     this.invoiceSer.getDatas().subscribe({
       next: (data) => {
         this.data$ = data
       }
     })
  }
}
