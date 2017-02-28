## Onek: Guardian

### Background

The player is Onek, a shoggoform derelict AI unit tasked with protecting a city that ceased to exist aeons ago and lies drowned beneath the waves ov a dead, cold world.

Humans have descended to your nameless domain to claim the secrets of your masters. You must pick them off one by one. Raising their fear until they abandon their foolish quest.

essentially this is a spooky clone of katamari damacy with added element of avoiding lights.

### Functionality & MVP  

With this game, users will be able to:

- [ ] Start and pause
- [ ] control Onek using a mouse and asdf.
- [ ] Swing tentacles to consume foolish ape creatures in their frail 3 dimensions.
- [ ] Avoid the humans' lights.
- [ ] Grow in strength and size as you consume mortals.

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production README


### Architecture and Technologies

**NB**: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use.  Identify and create a plan of attack for the major technical challenges in your project.

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- `Easel.js` or `Sketch.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

I'm looking to make something like this for the creature:

https://codepen.io/soulwire/pen/KLrBz

In addition to the webpack entry file, there will be three scripts involved in this project:

`controls.js`: this script will handle the input logic for ONEK.

`onek.js`: this script will handle Onek, last of the ancient servitors. Zir movement animations and so forth.

`environment.js`: this script will contain the logic for YOUR DARK DOMAIN.

`humans.js`: this script will handle the pathing of each individual  

`human.js`: constructor script for individual humans

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`. Learn the basics of `Easel.js` and/or `sketch.js`.  Goals for the day:

- Get a green bundle with `webpack`.
- Render Onek on screen.
- Resources for ruins and human divers.

**Day 2**:

- complete `human.js` constructor
- render humans on `Canvas`
- movement logic for Onek
- set up logic for Onek to consume humans

**Day 3**:   Goals for the day:

- create logic in humans.js to move humans around the abyss.
- lights for onek to avoid.


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.
