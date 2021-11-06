import { Component, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {

  id: string;
  name:string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogREf: MatDialogRef<PopUpComponent>,
    public customersService: CustomersService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.customersService.getCustomer(this.data.id).subscribe( x => this.name = x?.firstName+ ' ' + x?.lastName)
  }

  cancel(): void {
    this.dialogREf.close(this.data);
    this.router.navigate(["/customers"])
  }

  onDelete(){
    this.dialogREf.close(this.data.id);
    this.router.navigate(["/customers"]);
  }

}