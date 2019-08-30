import { Routes,RouterModule} from "@angular/router";
import { LogindisplayComponent } from './logindisplay/logindisplay.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';


const arr : Routes=[
      {path:'',component:EmployeeloginComponent},
      {path:'dashboard',component:LogindisplayComponent}
  // {path:'login',component:EmployeeloginComponent},



];

export const routing=RouterModule.forRoot(arr);
