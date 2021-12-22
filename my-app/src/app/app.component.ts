import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formule 1';

  laatsteWDC = "Max Verstappen";
  alleWDC = ['Lewis Hamilton', 'Kimi Raikkonen', 'Michael Schumacher', 'Fernando Alonso', 'Jenson Button', 'Sebastien Vettel'];

  addWDC(newWDC: string){
    this.alleWDC.push(newWDC);
  }
}
