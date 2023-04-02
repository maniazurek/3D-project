## 3D Project ##

Technologies used in the project:

 - React
 - @react-three/fiber
 - @react-three/cannon
 - @react-three/drei

The aim of the project is to simulate different colored balls moving in a random direction in a circle.
The Ball.js component is responsible for the balls that appear in the simulation.
The Edges.js component represents its boundaries.
Bouncing occurs relative to the balls and relative to the walls.
In order to simulate infinite the bouncing of the balls, the @react-three/fiber and @react-three/cannon libraries were used.
The problem encountered was the placement of the balls in a circle, so the simulation was presented in a square instead using useFrame and useBox hooks.

In order to start development of the project please type "npm install" in the terminal to install all the dependencies and "npm start" to start the project.






