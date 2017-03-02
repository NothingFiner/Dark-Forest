export const getNewPosition = (position, vector) => {
  const newPosition = Object.assign(position);
  newPosition.x += vector.x;
  newPosition.y += vector.y;
  return newPosition;
};

export const getNewVector = (position1, position2) => {
  const newVector = Object.assign(position1);
  newVector.x -= position2.x;
  newVector.y -= position2.y;
  return newVector;
};
