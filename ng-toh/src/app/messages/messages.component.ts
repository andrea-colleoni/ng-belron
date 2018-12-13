import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messaggi: string[] = [];

  constructor(
    private ms: MessagesService,
  ) { }

  ngOnInit() {
    this.ms.messages.subscribe((s) => this.messaggi.push(s));
  }

  clear() {
    this.messaggi.length = 0;
  }

}
