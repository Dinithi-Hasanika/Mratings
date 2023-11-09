import { Space } from "./Space";
export class User{
    id:string;
    userName: string;
    firstName: string;
    lastName:string;
    userSpaces: Space[];

    constructor(id:string, userName: string, firstName: string, lastName:string, userSpaces: Space[]){
     this.id = id;
     this.userName = userName;
     this.firstName = firstName;
     this.lastName = lastName;
     this.userSpaces = userSpaces;
    }
}