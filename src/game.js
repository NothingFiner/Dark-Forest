import paper from 'paper';
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
  const portal = new paper.Path.Rectangle([paper.view.center.x - 50, weapon.position.y - 60], [100, 100]);
  const startPos = weapon.position;
  portal.strokeColor = '#ff00ee';

  const collisionCheck = () => {
    if (weapon.position !== startPos) {
      system.planets.forEach((planet) => {
        if ((planet.body.hitTest(weapon.core.position) || weapon.core.hitTest(planet.body.position)) && planet.body.visible) {
          if (weapon.size * 10 >= planet.mass) {
            weapon.grow(planet.mass);
            planet.body.visible = false;
          }
        }
      });
    }
  };
  setTimeout(() => {
    document.getElementById('container').classList.add('active');
    document.getElementById('status').classList.remove('active');
    document.getElementById('stars').classList.remove('transit');
  }, 5000);
  weapon.gestate();

  paper.view.onFrame = () => {
    portal.rotate(3);
    if (paper.Key.isDown('a')) weapon.left();
    if (paper.Key.isDown('d')) weapon.right();
    if (paper.Key.isDown('w')) weapon.forward();
    if (paper.Key.isDown('s')) weapon.reverse();
    star.pulse();
    system.orbit();
    collisionCheck();
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
