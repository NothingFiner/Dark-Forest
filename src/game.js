import paper from 'paper';
import sass from '../style.sass';
import Weapon from './weapon';

paper.install(window);
window.onload = () => {
  paper.setup('game');
  const weapon = new Weapon(paper);
  // let destination = paper.Point.random();
  const creature = new paper.Path.Rectangle([75, 75], [100, 100]);
  creature.strokeColor = '#ff00ee';
  weapon.gestate();

  paper.view.onFrame = () => {
    creature.rotate(3);
    if (paper.Key.isDown('space')) weapon.grow();
    if (paper.Key.isDown('a')) weapon.left();
    if (paper.Key.isDown('d')) weapon.right();
    if (paper.Key.isDown('w')) weapon.forward();
    if (paper.Key.isDown('s')) weapon.reverse();
    weapon.draw();
  };
};
