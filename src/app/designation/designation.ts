export class Designation {
  public constructor(
    public Name: string,
    public Description: string,
    public Id:number,
    public OrganizationId:number,
    public Isactive:boolean,
    public Createdby:number,
    public  Createddate:Date,
    public  Modifiedby:string,
    public   Modifieddate:Date

    ) {}
}
