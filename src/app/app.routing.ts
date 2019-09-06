import { Routes,RouterModule} from "@angular/router";
import { LogindisplayComponent } from './logindisplay/logindisplay.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { DesignationComponent } from './designation/designation.component';
import { DocumentComponent } from './document/document.component';
import { ManageorgComponent } from './manageorg/manageorg.component';


const arr : Routes=[
      {path:'',component:EmployeeloginComponent},
      {path:'dashboard',component:LogindisplayComponent},
  // {path:'login',component:EmployeeloginComponent},
  { path: 'manage', component: ManageorgComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'alldoc', component: DocumentComponent }



];

export const routing=RouterModule.forRoot(arr);
