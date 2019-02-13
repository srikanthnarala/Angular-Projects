import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  karr = ['one','two','threee'];

  myData() {
    return 'this is my smaple data';
  }

}
