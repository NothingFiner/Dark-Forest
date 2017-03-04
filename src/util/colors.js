import paper from 'paper';
import { values } from 'lodash';

export const starColors = {
  orange: new paper.Color(243, 156, 18),
  red: new paper.Color(231, 76, 60),
  blue: new paper.Color(52, 152, 219),
  yellow: new paper.Color(241, 196, 15),
  silver: new paper.Color(236, 240, 241),
};

export const randomStarColor = () => {
  const colorArray = values(starColors);
  return colorArray[Math.floor(Math.random() * colorArray.length)];
};

export const getRGB = (color) => {
  return `rgb(${color.components[0]}, ${color.components[1]}, ${color.components[2]})`;
};
