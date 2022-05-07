import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): User[] {
    return [
      new User('Ben',45),
      new User('John',55),
      new User('Bill',35),
      new User('Den',25),
      new User('Den',25),
    
    ];
  }

  constructor() { }
}
