import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  username: string;
  password: string;
  show:boolean=true;


  constructor(private router: Router) { }

  ngOnInit() {}

  login(){
    // this.show=false;
    //  this.router.navigate(['Akshata']);
    //  console.log("akshata")
  if(this.username=='A' && this.password=='A'){
      this.router.navigate(['dashboard']);
     }else{
      alert("Invalid User");
    }
   }

}


