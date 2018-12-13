import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Subject<string>;

  constructor() {
    this.messages = new Subject<string>();
  }

  add(message: string) {
    this.messages.next(message);
  }

  /*
  clear() {
    // this.messages = [];
    // questo svuota l'array senza modificarne il puntatore
    this.messages.length = 0;
  }
  */
}
