import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passGen';
  password=''
  includeLetters = false
  includeNumbers= false
  includeSymbols= false

  onChangeUseLetter(){
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols
  }

  onButtonClick(){
    this.password = 'my password'
    console.log('Button clicked..')
    console.log(`generating password for the following terms:
                  Include letters: ${this.includeLetters}
                  Include Numbers: ${this.includeNumbers}
                  Include Symbols: ${this.includeSymbols}
                  `)
  }
}
