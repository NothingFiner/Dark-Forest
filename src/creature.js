import Paper from 'paper';
import { getNewPosition, getNewVector } from './util/paper_util';

class Onek {
  constructor(paperScope) {
    this.view = paperScope.view;
    this.center = paperScope.view.center;
    this.tentacles = 3;
    this.partLength = 5;
    this.size = 20;
    this.tentacle = new Paper.Path();
    this.vector = new Paper.Point({
      angle: 0,
      length: 20,
    });
    this.friction = 0.95;
    this.speed = 1;
    this.maxSteer = 4.5;
    this.steering = 1.5;
    this.maxSpeed = 10;
    this.minSpeed = 1;
    this.position = this.center;
    this.lastRotation = 0;
    this.count = 0;
  }

  gestate() {
    this.core = new Paper.Path.Oval({
      from: [0, 0],
      to: [13, 13],
      fillColor: 'black',
      strokeColor: null,
    });
    this.core.scale(2.3);
    for (let i = 0; i < this.size; i += 1) {
      this.tentacle.add((this.position.x - (i * this.partLength)), this.position.y);
    }
    this.tentacle.strokeColor = 'black';
    this.tentacle.strokeWidth = 5;
  }

  left() {
    if (this.speed >= -1) {
      if (this.speed < 3 && this.speed >= 0) {
        this.vector.angle -= (this.speed * 2);
      } else if (this.speed < 0) {
        this.vector.angle -= (this.speed / 2);
      } else {
        this.vector.angle -= this.maxSteer * this.steering;
      }
    }
    this.speed *= this.friction;
  }

  right() {
    if (this.speed >= -1) {
      if (this.speed < 3 && this.speed >= 0) {
        this.vector.angle += (this.speed * 2);
      } else if (this.speed < 0) {
        this.vector.angle += (this.speed / 2);
      } else {
        this.vector.angle += this.maxSteer * this.steering;
      }
    }
    this.speed *= this.friction;
  }

  forward() {
    this.speed += 0.3;
    this.speed = Math.min(this.maxSpeed, this.speed);
  }

  reverse() {
    this.speed -= 0.3;
    if (this.speed < -this.minSpeed) this.speed = -this.minSpeed;
  }

  constrain() {
    const bounds = this.tentacle.bounds;
    const size = this.view.size;
    if (!bounds.intersects(Paper.view.bounds)) {
      if (this.position.x < -bounds.width) this.position.x = size.width + bounds.width;
      if (this.position.y < -bounds.height) this.position.y = size.height + bounds.height;
      if (this.position.x > size.width + bounds.width) this.position.x = -bounds.width;
      if (this.position.y > size.height + bounds.height) this.position.y = -bounds.height;
      this.path.position = this.position;
    }
  }

  draw() {
    const normalizedVector = this.vector.normalize(this.speed);
    this.speed = this.speed * this.friction;
    this.position = getNewPosition(this.position, normalizedVector).clone();
    // this.tentacle.firstSegment.point = this.position
    // let lastPoint = this.tentacle.firstSegment.point
    // let lastVector = normalizedVector.clone();
    // for (let i = 1; i < this.tentacle.segments.length; i += 1) {
    //   let segment = this.tentacle.segments[i].point
    //   const newVector = getNewVector(lastPoint, segment);
    //   this.count += normalizedVector.length * 10;
    //   const rotationLength = Math.sin((this.count + i * 3) / 600);
    //   const rotated = lastVector.rotate(90).normalize(rotationLength);
    //   segment = getNewPosition(lastPoint, lastVector.normalize(-this.partLength - normalizedVector.length / 10));
    //   lastPoint = segment;
    //   this.tentacle.segments[i].point = getNewPosition(segment, rotated);
    //   if (i === 1) {
    //     const rotation = newVector.angle;
    //     this.core.rotate(rotation - this.lastRotation);
    //     this.lastRotation = rotation;
    //   }
    //   lastVector = newVector;
    // }
    this.core.position = this.position;
    this.tentacle.smooth();
    this.constrain();
  }
}

export default Onek;
