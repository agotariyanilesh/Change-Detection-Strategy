import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  aquaticCreatures = ['shark', 'dolphin', 'octopus'];

  addAquaticCreature(newAquaticCreature) {
    this.aquaticCreatures = [...this.aquaticCreatures, newAquaticCreature];
    //this.aquaticCreatures.push(newAquaticCreature);
  }
}
