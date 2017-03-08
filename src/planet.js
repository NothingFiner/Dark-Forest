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
    this.body = new paper.Raster(this.type);
    this.body.position = this.position;
    this.body.size = [this.mass * 2, this.mass * 2];
  }

  orbit() {
    this.body.rotate(this.velocity, this.starCenter);
  }
}

export default Planet;
