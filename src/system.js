import { sample } from 'lodash';
import Planet from './planet';

const PLANET_TYPES = ['transmuted', 'drydeal', 'cloud', 'venom', 'dust', 'transformed', 'ideal', 'harsh', 'smoke', 'gas', 'ice', 'vein', 'ooze', 'fear', 'glory'];
const PLANET_SIZES = [5, 6, 8, 10, 15, 20];

class System {
  constructor(paperScope, stellarMass) {
    this.stellarMass = stellarMass;
    this.center = paperScope.view.center.clone();
    this.maxMass = Math.floor(Math.random() * 100) + (this.stellarMass * 2);
    this.planetTypes = PLANET_TYPES;
    this.planets = [];
    this.bodyCount = 0;
    this.systemMass = 5;
    this.currentRadius = this.stellarMass * 2.5;
    this.minRadius = this.center.x - (this.stellarMass * 1.5);
    this.seed();
  }

  seed() {
    while (this.systemMass < this.maxMass && this.currentRadius < this.minRadius && this.planets.length < 8) {
      const planetMass = Math.floor(Math.random() * (this.stellarMass / 6)) + sample(PLANET_SIZES);
      const planetType = sample(PLANET_TYPES);
      const orbitalRadius = Math.floor(Math.random() * planetMass) + this.currentRadius;


      this.planets.push(new Planet({
        radius: orbitalRadius,
        mass: planetMass,
        type: planetType,
        starMass: this.stellarMass,
        center: this.center,
      }));
      this.systemMass += planetMass;
      this.currentRadius += (planetMass * 4);
      this.bodyCount += 1
    }
  }

  orbit() {
    this.planets.forEach((planet) => {
      planet.orbit();
    });
  }
}

export default System;
