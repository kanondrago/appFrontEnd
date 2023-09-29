
import { Role } from "./Role";
import { Transaction } from "./Transaction";
 

export class User {
    id!:number;
    username!:string;
    created!:string;
    updated!:string;
    role!:Role;
    transactions!:Transaction[];

    // No agregue la fecha de expiración
    token!: string;
}