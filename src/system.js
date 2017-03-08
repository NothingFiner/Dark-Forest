import { sample } from 'lodash';
import Planet from './planet';

const PLANET_TYPES = ['transformed', 'ideal', 'harsh', 'smoke', 'gas', 'ice', 'vein', 'ooze', 'fear', 'glory'];

class System {
  constructor(paperScope, stellarMass) {
    this.stellarMass = stellarMass;
    this.center = paperScope.view.center.clone();
    this.systemMass = Math.floor(Math.random() * 100) + (this.stellarMass * 2);
    this.planetTypes = PLANET_TYPES;
    this.planets = [];
    this.currentRadius = this.stellarMass * 2;
    this.minRadius = this.center.x - (this.stellarMass * 1.5);
    this.seed();
  }

  seed() {
    while (this.systemMass > 10 && this.currentRadius < this.minRadius) {
      const planetMass = Math.floor(Math.random() * (this.stellarMass / 2)) + 5;
      const planetType = sample(PLANET_TYPES);
      const orbitalRadius = Math.floor(Math.random() * planetMass) + this.currentRadius;

      this.planets.push(new Planet({
        mass: planetMass,
        type: planetType,
        radius: orbitalRadius,
        starMass: this.stellarMass,
        center: this.center,
      }));
      this.systemMass -= planetMass;
      this.currentRadius += (planetMass * 3);
    }
  }

  orbit() {
    this.planets.forEach((planet) => {
      planet.orbit();
    });
  }
}

export default System;
