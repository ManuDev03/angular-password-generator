import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passGen';
  password=''
  length = 0
  includeLetters = false
  includeNumbers= false
  includeSymbols= false

  onChangeLength(value : string){
    const parsedValue = parseInt(value)

    if(!isNaN(parsedValue)){
      this.length = parsedValue
    }
  }

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
    console.log(`password length : ${this.length}`)
  }
}
