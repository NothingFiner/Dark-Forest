import paper from 'paper';
import { randomStarColor, getRGB } from './util/colors';

const STAR_COLORS = ['#f39c12', '#e74c3c', '#3498db', '#f1c40f', '#ecf0f1']

class Sun {
  constructor(paperScope, sunSeed) {
    this.view = paperScope.view;
    this.center = paperScope.view.center;
    this.lagrange = this.center;
    this.mass = 50;
    this.color = randomStarColor();
    this.rgb = getRGB(this.color);
    this.spots = [];
    this.spawn();
    this.pulsing = true;
  }

  pulse() {
    if (this.pulsing) {
      this.star.shadowBlur += 0.25;
      if (this.star.shadowBlur > (this.mass / 4) + 5) this.pulsing = false;
    } else {
      this.star.shadowBlur -= 0.25;
      if (this.star.shadowBlur <= (this.mass / 4)) this.pulsing = true;
    }
  }

  spawn() {
    this.star = new paper.Path.Circle({
      center: this.lagrange,
      radius: this.mass,
      strokeColor: null,
      shadowColor: this.rgb,
      shadowBlur: this.mass / 4,
    });
    this.star.fillColor = {
      gradient: {
        radial: true,
        stops: [['whitesmoke', 0.0000001], [this.rgb, 1]],
      },
      origin: { x: this.star.position.x - (this.mass / 3.14), y: this.star.position.y - (this.mass / 3.14)},
      destination: this.star.bounds.rightCenter,
    };
    // for (let i = 1; i < 20; i += 1) {
    //   const x = this.center.x - Math.floor(Math.random() * 50) + 20;
    //   const y = this.center.y - Math.floor(Math.random() * 15) - 20;
    //   this.spots.push(new paper.Path.Rectangle({
    //     point: [x, y],
    //     size: [10, 10],
    //     fillColor: this.color,
    //   }));
    // }
  }
}

export default Sun;
