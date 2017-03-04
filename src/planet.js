import paper from 'paper';
import { getNewPosition } from './util/paper_util';

class Planet {
  constructor(paperScope, planetSeed) {
    this.orbitalRadius = planetSeed.radius;
    this.starCenter = paperScope.view.center.clone();
    this.position = paperScope.view.center.clone();
    this.position.x -= this.orbitalRadius;
    this.mass = planetSeed.mass;
    this.velocity = this.getVelocity();
    this.vector = this.getOrbitalVector();
    this.spawn();
  }

  getVelocity() {
    return Math.sqrt((this.mass * 50) / this.orbitalRadius);
  }

  getOrbitalVector() {
    return new paper.Point({
      angle: Math.atan2(this.position.x - this.starCenter.x, this.position.y - this.starCenter.y),
      length: this.velocity,
    });
  }

  spawn() {
    this.body = new paper.Raster('planet');
    this.body.position = this.position;
    this.body.size = [this.mass * 2, this.mass * 2];

    // new paper.Path.Circle({
    //   radius: this.mass,
    //   center: this.position,
    //   fillColor: 'blue',
    // });
  }

  orbit() {
    // this.position = this.position.add(this.vector.normalize(this.velocity));
    // this.body.position = this.position;
    // this.vector.angle =  Math.atan2(this.position.x - this.starCenter.x, this.position.y - this.starCenter.y);
    this.body.rotate(this.vector.angle, this.starCenter);
  }
}

export default Planet;
