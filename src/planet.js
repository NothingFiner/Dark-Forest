import paper from 'paper';

class Planet {
  constructor(planetSeed) {
    this.orbitalRadius = planetSeed.radius;
    this.starCenter = planetSeed.center;
    this.starMass = planetSeed.starMass;
    this.position = this.starCenter.clone();
    this.position.x -= this.orbitalRadius;
    this.mass = planetSeed.mass;
    this.type = planetSeed.type;
    this.velocity = this.getVelocity();
    this.spawn();
  }

  getVelocity() {
    return Math.sqrt((this.starMass) / (this.orbitalRadius));
  }

  spawn() {
    this.orbitRing = new paper.Path.Circle({
      radius: this.orbitalRadius,
      center: this.starCenter,
      strokeWidth: 1,
      strokeColor: 'rgba(68,214,44, 0.1)',
      fillColor: null,
      dashArray: [2, 10],
    });
    this.body = new paper.Raster(this.type);
    this.body.position = this.position;
    this.body.size = [this.mass * 2, this.mass * 2];
  }

  orbit() {
    this.body.rotate(this.velocity, this.starCenter);
  }
}

export default Planet;
