import paper from 'paper';
import { keys } from 'lodash';
import sass from '../style.sass';
import Weapon from './weapon';
import Sun from './sun';
import System from './system';

paper.install(window);

const Game = () => {
  paper.setup('game');
  const star = new Sun(paper);
  const system = new System(paper, star.mass);
  const weapon = new Weapon(paper);
  const startPos = weapon.position;
  const planetIdx = keys(system.planets).map(key => parseInt(key, 10)).sort();
  console.log(planetIdx);
  console.log(system.planets);
  const collisionCheck = () => {
    if (weapon.position !== startPos) {
      const currentTarget = system.planets[weapon.size];
      if (currentTarget.body.hitTest(weapon.core.position)
        || weapon.core.hitTest(currentTarget.body.position)) {
        delete system.planets[weapon.size];
        weapon.grow(currentTarget.mass);
        currentTarget.body.remove();
      }
      // system.planets.forEach((planet) => {
      //   if ((planet.body.hitTest(weapon.core.position) || weapon.core.hitTest(planet.body.position)) && planet.body.visible) {
      //     if (weapon.size * 10 >= planet.mass) {
      //       weapon.grow(planet.mass);
      //       planet.body.visible = false;
      //     }
      //   }
      // });
    }
  };

  const won = () => {
    document.getElementById('stars').classList.add('transit');
    setTimeout(() => {
      document.getElementById('status-text').innerHTML = 'PURGED';
      document.getElementById('status').classList.add('active');
      paper.project.clear();
      paper.project.activeLayer.removeChildren();
    }, 1000);
  };

  setTimeout(() => {
    document.getElementById('container').classList.add('active');
    document.getElementById('status').classList.remove('active');
    document.getElementById('stars').classList.remove('transit');
  }, 5000);
  weapon.gestate();
  weapon.core.visible = false;
  setTimeout(() => {
    weapon.core.visible = true;
  }, 6000);


  paper.view.onFrame = () => {
    if (paper.Key.isDown('a')) weapon.left();
    if (paper.Key.isDown('d')) weapon.right();
    if (paper.Key.isDown('w')) weapon.forward();
    if (paper.Key.isDown('s')) weapon.reverse();
    star.pulse();
    system.orbit();
    if (weapon.size >= system.bodyCount) {
      won();
    } else {
      collisionCheck();
    }
    weapon.draw();
  };
};

window.onload = () => {
  document.getElementById('startGame')
    .addEventListener('click', () => {
      document.getElementById('menu').classList.add('hide');
      document.getElementById('status').classList.add('active');
      document.getElementById('stars').classList.add('transit');
      Game();
    });
};
