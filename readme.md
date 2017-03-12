# Dark Forest

[Play Dark Forest](http://efinerdesign.com/game.html)

Dark Forest is a JavaScript browser game inspired by Katamari Damacy and Cixin Liu's Remembrance of Earth's past Trilogy. The player controls an advanced alien weapon and must destroy the planets in the correct order.

## Features and Implementation

### Technologies

Dark Forest is built with Canvas animation library Paper.js. However, instead of using that library's PaperScript syntax, Dark Forest is implemented in straight ES6, bundled up with Webpack. The bundler also compiles serves the game's SASS styles, which are responsible for the game's background and menu animations.

Planetary velocities are calculated through a simplification of orbital physics:

`Velocity = Sqrt(StellarMass/OrbitalRadius)`

### Game Objects

- `Weapon`: Renders the player, contains logic for moving player in response to user input and increasing player size when a planet is consumed.
- `Star`: Renders the solar system's star, with a random mass between 35 and 85, and one of five colors. Also handles pulsing animation for star.
- `Planet` : Renders a planet based on a planetSeed object, which contains it's mass oribtalRadius, and one of 14 sprite types. Handles orbit.
- `System` : Calls the render of `Planets` from a randomized set of seeds and the mass of the system's `Star`. All `Planets` are kept in an array as an attribute of the `System` class, to simplify hit testing and calling the orbit functions for each `planet`.

### User Interface

- `paper` : All visible game elements are called on this class from Paper.js. Animations and hit testing are all called through its `onFrame` method.
- `Game` : Initializes the `paper` object on the `#game` Canvas element and renders initial game objects, before setting up `onFrame`.
- `collisionCheck` : Checks if the weapon is in the same space as a planet.
- `isOver` : Checks if either end state condition has been reached and displays appropriate menu.


## Running Dark Forest

### Prerequisites

An up to date version of [npm](https://www.npmjs.com).

### Project Setup

1. `git clone https://github.com/nothingfiner/dark-forest.git`
2. `cd dark-forest`
3. `npm install`
4. `npm run webpack`

### Starting a Local Server
1. `npm install -g http-server` (This globally installs a simple web server to serve the page locally)
2. `http-server`
3. Visit `http://localhost:8080/`
