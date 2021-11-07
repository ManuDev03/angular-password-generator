import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passGen';
  password=''
  onButtonClick(){
    this.password = 'my password'
    console.log('Button clicked..')
  }
}
