import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular Project';
  constructor(){
    setTimeout(() => {
      this.title= 'Project 1'
    }, 5000);
  }
}
