import { Business } from "./business"

export interface Employee {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string
    filesPath: string
    business: Business
  };
  