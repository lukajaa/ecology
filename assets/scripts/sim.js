// Multipliers
const fish1Speed = 1;
const fish2Speed = 1;
const fish1EnergyConsumption = 1;
const fish2EnergyConsumption = 1;
const fish1ReproductionRate = 0;
const fish2ReproductionRate = 1;

// Define variables
const numFish = 50; // number of fish in each species
const fishSize = 10; // radius of fish
const maxSpeed = 2; // maximum speed of fish
const foodSpawnRate = 1; // rate at which food appears
const foodSize = 5; // size of food
const foodValue = 10; // value of food to fish
const fish1Color = '#FF0000'; // color of first species of fish
const fish2Color = '#0000FF'; // color of second species of fish

// Create arrays to hold fish and food objects
var fish1 = [];
var fish2 = [];
let ticksRun = 0;
var food = [];

// Define Fish class
class Fish {
  constructor(x, y, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.alive = true;
    this.energy = 100;
  }

  move() {
    // Move fish
    
    if (this.color == fish1Color) {
      this.x += this.vx * fish1Speed;
      this.y += this.vy * fish1Speed;
    } else {
      this.x += this.vx * fish2Speed;
      this.y += this.vy * fish2Speed;
    }
    // Consume energy
    
    if (this.color == fish1Color) {
      this.energy -= 0.1 * fish1EnergyConsumption;
    } else {
      this.energy -= 0.1 * fish2EnergyConsumption;
    }

    // Bounce off walls
    if (this.x < fishSize || this.x > 600 - fishSize) {
      this.vx *= -1;
    }
    if (this.y < fishSize || this.y > 600 - fishSize) {
      this.vy *= -1;
    }

    // Consume food
    for (let i = 0; i < food.length; i++) {
      const d = Math.sqrt((this.x - food[i].x) ** 2 + (this.y - food[i].y) ** 2);
      if (d < fishSize + foodSize) {
        this.energy += foodValue;
        food.splice(i, 1);
      }
    }

    // Die if energy reaches 0
    if (this.energy <= 0) {
      this.alive = false;
    }
  }

  reproduce() {
    // use reproductive edge 
    
    if (this.energy >= 200) {

    if (this.color == fish1Color) {
        if (Math.random() < fish1ReproductionRate) {
      let newX = this.x + Math.random() * 2 * fishSize - fishSize;
      let newY = this.y + Math.random() * 2 * fishSize - fishSize;
      let newVX = Math.random() * 2 * maxSpeed - maxSpeed;
      let newVY = Math.random() * 2 * maxSpeed - maxSpeed;
      let newFish = new Fish(newX, newY, newVX, newVY, this.color);
        fish1.push(newFish);
    }   
    } else {
        if (Math.random() <= fish2ReproductionRate) {
        let newX = this.x + Math.random() * 2 * fishSize - fishSize;
        let newY = this.y + Math.random() * 2 * fishSize - fishSize;
        let newVX = Math.random() * 2 * maxSpeed - maxSpeed;
        let newVY = Math.random() * 2 * maxSpeed - maxSpeed;
        let newFish = new Fish(newX, newY, newVX, newVY, this.color);
        fish2.push(newFish);
    }    
    }

    this.energy -= 100;
}
  }

  }


// Define Food class
class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// loop ten times
for (let i = 0; i < 10; i++) {

// empty the arrays
fish1 = [];
fish2 = [];
food = [];
ticksRun = 0;

// Spawn fish and food
for (let i = 0; i < numFish; i++) {
    let x1 = Math.random() * 600;
    let y1 = Math.random() * 600;
    let vx1 = Math.random() * 2 * maxSpeed - maxSpeed;
    let vy1 = Math.random() * 2 * maxSpeed - maxSpeed;
    let f1 = new Fish(x1, y1, vx1, vy1, fish1Color);
    fish1.push(f1);
  
    let x2 = Math.random() * 600;
    let y2 = Math.random() * 600;
    let vx2 = Math.random() * 2 * maxSpeed - maxSpeed;
    let vy2 = Math.random() * 2 * maxSpeed - maxSpeed;
    let f2 = new Fish(x2, y2, vx2, vy2, fish2Color);
    fish2.push(f2);
  }

while (fish1.length > 0 && fish2.length > 0) {
  // Spawn food
  if (Math.random() < foodSpawnRate) {
    let x = Math.random() * 600;
    let y = Math.random() * 600;
    let newFood = new Food(x, y);
    food.push(newFood);
  }

  // Draw and move fish
  for (let i = 0; i < fish1.length; i++) {
    let f = fish1[i];
    if (f.alive) {
      f.move();
      f.reproduce();
    } else {
      fish1.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < fish2.length; i++) {
    let f = fish2[i];
    if (f.alive) {
      f.move();
      f.reproduce();
    } else {
      fish2.splice(i, 1);
      i--;
    }
  }

  // Update stats
  ticksRun++;
}

console.log(ticksRun)
}