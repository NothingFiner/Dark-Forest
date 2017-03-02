import paper from 'paper';
import sass from '../style.sass';
import Creature from './creature';

paper.install(window);
window.onload = () => {
  paper.setup('game');
  const onek = new Creature(paper);
  // let destination = paper.Point.random();
  const creature = new paper.Path.Rectangle([75, 75], [100, 100]);
  creature.strokeColor = 'black';
  onek.gestate();
  paper.view.onFrame = () => {
    creature.rotate(3);
    if (paper.Key.isDown('a')) onek.left();
    if (paper.Key.isDown('d')) onek.right();
    if (paper.Key.isDown('w')) onek.forward();
    if (paper.Key.isDown('s')) onek.reverse();
    onek.draw();
  };
};
