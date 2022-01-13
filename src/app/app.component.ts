/*
* File: app.component.ts
* Author: jakab attila
* Copyright: 2022, jakab attila
* Group: Szoft V
* Date: 2022-01-13
* Github: https://github.com/Attila2001
* Licenc: GNU GPL
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
    title = 'hurnegyter';
    A: number;
    B: number;
    C: number;
    D: number;
    terulet: number;
    constructor(){
        this.A = 0;
        this.B = 0;
        this.C = 0;
        this.D = 0;
        this.terulet = 0;
    }
    calcArea(): any{
      console.log(this.terulet);
      this.terulet = Number(this.A) + Number(this.B) + Number(this.C) + Number(this.D) /2;
      
    }
  }



