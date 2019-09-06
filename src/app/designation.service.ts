import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class DesignationService {

constructor(private http: HttpClient) { }
// private mobUrl = 'api/desig';
// SERVER_URL: string ='https://7d23f257.ngrok.io/api/Settings/GetDesignations';
SERVER_URL: string ='https://8bb9e835.ngrok.io/api/Settings/GetDesignations';



SERVER_URL2: string ='https://8bb9e835.ngrok.io/api/Settings/InsUpdateDesignation';

SERVER_URL3: string ='https://8bb9e835.ngrok.io/api/Settings/GetDesignationsDetails?DesignationId={DesignationId}';
SERVER_URL4:'https://8bb9e835.ngrok.io/api/Settings/DeleteDesignation?DesignationId={DesignationId}';

// strartl

public getDesignations() {
return this.http.get(this.SERVER_URL);
}

public getDesignationById(id) {
return this.http.get(this.SERVER_URL + id);
}

public deleteDesignation(designationID) {
// let head = new HttpHeaders().set("Content-Type", "application/json");
console.log('how it is getting ID?:' + designationID);
// console.log(this.http.delete(this.SERVER_URL + designationID), { headers: head });
return this.http.delete(this.SERVER_URL4 + designationID);
}

public addDesignation(f:any) {
console.log(f);
console.log(JSON.stringify(f));
let body = JSON.stringify(f);
let head = new HttpHeaders().set("Content-Type", "application/json");
return this.http.post(this.SERVER_URL2, body, {headers: head});
}


editDesignation(Id, item) {
console.log(Id);
let body = JSON.stringify(item);
let head = new HttpHeaders().set("Content-Type", "application/json");
return this.http.put(this.SERVER_URL3 + Id, body, { headers: head });
}
}
