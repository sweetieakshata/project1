import { OnInit, Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { Router } from '@angular/router';
import { DesignationService } from '../designation.service';
import { Designation } from './designation';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  constructor(private _data: DesignationService,private router : Router,private modalService: NgbModal) { }
  updatedItem: number;
  title = 'Designations';
  closeResult: string;
  selectedDesignationOption: string;
  name: string;
  msg = 'Are You Sure!';
  description:string;


  arrDesig: Designation[];
  editId:number;
  editName:string;
  editDescription:string;

  ngOnInit() {


  this._data.getDesignations().subscribe(
  (data:Designation[])=>{
  this.arrDesig=data;
  },
  function(error) {
    alert(error);
  },
  function() {}
);
}
  onSearch(value) {

  console.log(value);
  if (value != '') {
  this.arrDesig = this.arrDesig.filter(x => x.Name.startsWith(value));
  }
  this.ngOnInit();
  }

  // Add modal
  openAdd(content, passedTitle) {
  this.selectedDesignationOption = passedTitle;
  this.name = '';
  this.description = '';
  this.modalService.open(content);
  }

  // Edit modal popup
  openEdit(content, passedTitle, i) {
  console.log(content);
  this.selectedDesignationOption = passedTitle;
  // console.log(i);
  this.name = this.arrDesig[i].Name;
  this.description = this.arrDesig[i].Description;
  // console.log('updating');
  this.updatedItem = i;
  this.modalService.open(content);
  }


  // delete
  onDesigDelete(desig) {
  console.log(desig);
  if (confirm(this.msg) === true) {
  this.arrDesig.splice(this.arrDesig.indexOf(desig), 1);
  }

  }

  onFormSubmit(f) {
  // if (this.selectedDesignationOption == 'Add') {
  // console.log(this.name);
  // this.arrDesig.push(new Designation(this.name, this.description));
  // } else {
  // let data = this.updatedItem;
  // console.log(data);
  // alert(this.arrDesig.length);
  // for (let i = 0; i < this.arrDesig.length; i++) {
  // if (i == data) {
  // this.arrDesig[i].name = this.name;
  // this.arrDesig[i].description = this.description ;
  // console.log(this.arrDesig);

  // // To initialize the fields with empty data
  // this.name = '';
  // this.description = '';
  // }
  // }
  // }

  this._data.addDesignation(f.value).subscribe((data: any) => {
  console.log(data);
  // alert("record added");
  });
  this.modalService.dismissAll();
  }

  designation(){
  this.router.navigate(['designation']);
  }
  Alldoc(){
  this.router.navigate(['alldoc']);
  }

  }


