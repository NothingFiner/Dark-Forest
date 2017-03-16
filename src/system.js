import { sample, shuffle, sortBy } from 'lodash';
import Planet from './planet';

const PLANET_TYPES = ['transmuted', 'drydeal', 'cloud', 'venom', 'dust', 'transformed', 'ideal', 'harsh', 'smoke', 'gas', 'ice', 'vein', 'ooze', 'fear', 'glory'];
const PLANET_SIZES = [3, 5, 8, 10, 13, 15, 18, 20, 25, 28, 30];

class System {
  constructor(paperScope, stellarMass) {
    this.stellarMass = stellarMass;
    this.center = paperScope.view.center.clone();
    this.maxMass = Math.floor(Math.random() * 20) + (this.stellarMass * 2);
    this.planetTypes = PLANET_TYPES;
    this.planetSizes = shuffle(PLANET_SIZES);
    this.planets = [];
    this.bodyCount = 0;
    this.systemMass = 5;
    this.currentRadius = this.stellarMass * 2.5;
    this.minRadius = this.center.x - (this.stellarMass * 1.5);
    this.seed();
  }

  seed() {
    while (this.systemMass < this.maxMass && this.currentRadius < this.minRadius && this.planetSizes.length > 4) {
      const planetSize = this.planetSizes.pop();
      const planetMass = planetSize;
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
      this.bodyCount += 1;
    }

    this.planets = sortBy(this.planets, 'mass');
  }

  orbit() {
    this.planets.forEach((planet) => {
      planet.orbit();
    });
  }
}

export default System;
