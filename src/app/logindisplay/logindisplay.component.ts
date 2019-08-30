import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-logindisplay',
  templateUrl: './logindisplay.component.html',
  styleUrls: ['./logindisplay.component.css']
})
export class LogindisplayComponent implements OnInit {
  xpandStatus=true;
  Firstname:string='';
  Lastname : string='';
   DOB : string='';
Gender : string='';
DOJ : string='';
Address1 : string='';
Address2 : string='';
City : string='';
 State : string='';
Country : string='';
 Race : string='';
Ethnicity: string='';
marital_status : string='';
 Language : string='';
 SSN_Govtid : string='';
 Email: string='';
 Cell_phone : string='';
 Home_phone : string='';
 Work_phone : string='';
 Extension : string='';

 arrlogin: Login[]=[
   new Login("Admin","Manju","01/01/1994","M","01/01/2019","Vijaya","Shantinagar","Hubli","Karnataka","India","Race1","Ethinicity1","married","French","XXX-XXX-1234","xyz@gmail.com","1234567898","1234567898","1234567898","123")

 ];
  constructor() { }

  ngOnInit() {
  }

}
