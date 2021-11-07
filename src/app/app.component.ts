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
   const numbers = '1234567890'
   const letters = 'abcdefghijklmnopqrstuvwxyz'
   const symbols = '!@#$%^&*()'

   let varchars = ''

   if(this.includeLetters){
     varchars += letters
   }
   if(this.includeNumbers){
    varchars += numbers
  }
  if(this.includeSymbols){
    varchars += symbols
  }

  let generatedPassword = ''
  for(let i = 0;i<this.length;i++){
    const index = Math.floor(Math.random() * varchars.length)
    generatedPassword += varchars[index]
  }
   this.password = generatedPassword

  }
}
