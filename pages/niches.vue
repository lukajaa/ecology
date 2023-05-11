<template>
    <div class="leading-normal tracking-normal text-gray-800 gradient">
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <p class="w-full my-2 text-5xl font-bold leading-tight text-center">
            Competition and Ecological Niches
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl text-gray-800 font-bold leading-none mb-3">
                What is a Niche?
            </p>
            <p class="text-gray-600 mb-8">
                An ecological niche is the role and position a species has in its environment. ie. what it eats, what eats it, and how it behaves.
            </p>
            <p class="text-xl text-gray-800 font-bold leading-none mb-3">
                Competitive Exclusion
            </p>
            <p class="text-gray-600 mb-8">
                Two organisms cannot occupy the same niche because they will compete for the same resources and one will eventually die out.
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/niche_1.svg" class="max-h-48 mx-auto" />
          </div>
        </div>
        <div class="container px-6 py-10 mx-auto">
        <p class="text-4xl text-center font-bold">Types of Niche</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 xl:mt-12 xl:gap-12">
            <div class="w-full ">
                <img class="w-full h-64 rounded-lg" src="~/assets/svgs/moon.svg" />
                
                <p class="text-2xl text-center font-bold rounded-lg">Time</p>
                <p class="text-lg text-center rounded-lg">For example, nocturnal vs diurnal animals</p>
            </div>

            <div class="w-full ">
                <img class="w-full h-64 rounded-lg" src="~/assets/svgs/mountain.svg" />
                
                <p class="text-2xl text-center font-bold rounded-lg">Place</p>
                <p class="text-lg text-center rounded-lg">For example, animals who live on treetops vs on the ground</p>
            </div>

            <div class="w-full ">
                <img class="w-full h-64 rounded-lg" src="~/assets/svgs/food.svg" />
                
                <p class="text-2xl text-center font-bold rounded-lg">Food</p>
                <p class="text-lg text-center rounded-lg">For example, herbivores vs carnivores</p>
            </div>
        </div>
    </div>
    <div class="flex flex-row mt-12 outline-green-600 outline-1 outline p-12 rounded-lg">
        <div class="flex flex-col w-6/12 px-4">
            <p class="text-3xl text-center font-bold rounded-lg">Fundamental Niche</p>
            <p class="text-lg text-center rounded-lg mt-4">A fundamental niche is the niche that an animal would occupy without any competition (what it is made to do)</p>
        </div>
        <div class="flex flex-col w-6/12 px-4">
            <p class="text-3xl text-center font-bold rounded-lg">Realized Niche</p>
            <p class="text-lg text-center rounded-lg mt-4">A realized niche is the niche that the organism actually occupies due to competition or other factors</p>
        </div>
    </div>
    <p class="text-4xl text-center mt-12 font-bold">Simulation</p>
    <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class="text-center text-md text-gray-600 mb-8">
          Modify the multipliers for the different attributes of the species to see how they affect the outcome of the simulation. Watch as the advantaged species outcompetes the disadvantaged species.
        </p>

    <div v-if="!started" class="flex flex-wrap">
        <div class="flex flex-col w-1/3 flex-grow">
            <p class="text-center">Fish 1 Speed Multiplier</p>
            <input v-model="fish1Speed" type="number" class="text-center w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" label="Number of fish" />
        </div>
        <div class="flex flex-col w-1/3 flex-grow">
            <p class="text-center">Fish 2 Speed Multiplier</p>
            <input v-model="fish2Speed" type="number" class="text-center w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" label="Number of fish" />
        </div>
        <div class="flex flex-col w-1/3 flex-grow">
            <p class="text-center">Fish 1 Energy Consumption Multiplier</p>
            <input v-model="fish1EnergyConsumption" type="number" class="text-center w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" label="Number of fish" />
        </div>
        <div class="flex flex-col w-1/3 flex-grow">
            <p class="text-center">Fish 2 Energy Consumption Multiplier</p>
            <input v-model="fish2EnergyConsumption" type="number" class="text-center w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" label="Number of fish" />
        </div>
        <div class="flex flex-col w-1/3 flex-grow">
            <p class="text-center">Fish 1 Reproduction Rate Multiplier</p>
            <input v-model="fish1ReproductionRate" type="number" class="text-center w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" label="Number of fish" />
        </div>
        <div class="flex flex-col w-1/3">
            <p class="text-center">Fish 2 Reproduction Rate Multiplier</p>
            <input v-model="fish2ReproductionRate" type="number" class="text-center w-full border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500" label="Number of fish" />
        </div>
    </div>
    <button v-if="!started" @click="started=true; animate()" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-12 text-center w-full">
        Start Simulation
    </button>
    <div v-if="started">
        <p class="text-lg text-center">Food: {{ food.length }} | Fish1: {{ fish1.length }} | Fish2: {{ fish2.length }}</p>
        <p class="text-lg text-center">Ticks: {{ ticksRun }}</p>
    </div>
    <canvas id="canvas" width="600" height="600" class="outline outline-black outline-1 rounded-lg shadow mx-auto"></canvas>
      </div>
    </section>
    <BackButton />
    </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(90deg, #16a34a 0%, #2dd4bf 100%);
}
</style>

<script setup>
var ctx;

onMounted(() => {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
})

// Multipliers
const fish1Speed = ref(1);
const fish2Speed = ref(1);
const fish1EnergyConsumption = ref(1);
const fish2EnergyConsumption = ref(1);
const fish1ReproductionRate = ref(1);
const fish2ReproductionRate = ref(1);

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
const fish1 = ref([]);
const fish2 = ref([]);
const ticksRun = ref(0);
const food = ref([]);
const started = ref(false);

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

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, fishSize, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  move() {
    // Move fish
    
    if (this.color == fish1Color) {
      this.x += this.vx * fish1Speed.value;
      this.y += this.vy * fish1Speed.value;
    } else {
      this.x += this.vx * fish2Speed.value;
      this.y += this.vy * fish2Speed.value;
    }
    // Consume energy
    
    if (this.color == fish1Color) {
      this.energy -= 0.1 * fish1EnergyConsumption.value;
    } else {
      this.energy -= 0.1 * fish2EnergyConsumption.value;
    }

    // Bounce off walls
    if (this.x < fishSize || this.x > 600 - fishSize) {
      this.vx *= -1;
    }
    if (this.y < fishSize || this.y > 600 - fishSize) {
      this.vy *= -1;
    }

    // Consume food
    for (let i = 0; i < food.value.length; i++) {
      const d = Math.sqrt((this.x - food.value[i].x) ** 2 + (this.y - food.value[i].y) ** 2);
      if (d < fishSize + foodSize) {
        this.energy += foodValue;
        food.value.splice(i, 1);
      }
    }

    // Die if energy reaches 0
    if (this.energy <= 0) {
      this.alive = false;
    }
  }

  reproduce() {
    // Reproduce if enough energy and space
    
    if (this.energy >= 200 * fish1ReproductionRate.value && this.color === fish1Color) {
      let newX = this.x + Math.random() * 2 * fishSize - fishSize;
      let newY = this.y + Math.random() * 2 * fishSize - fishSize;
      let newVX = Math.random() * 2 * maxSpeed - maxSpeed;
      let newVY = Math.random() * 2 * maxSpeed - maxSpeed;
      let newFish = new Fish(newX, newY, newVX, newVY, this.color);
      if (this.color === fish1Color) {
        fish1.value.push(newFish);
      } else {
        fish2.value.push(newFish);
      }
      this.energy -= 100;
    } else if (this.energy >= 200  * fish2ReproductionRate.value && this.color === fish2Color) {
      let newX = this.x + Math.random() * 2 * fishSize - fishSize;
      let newY = this.y + Math.random() * 2 * fishSize - fishSize;
      let newVX = Math.random() * 2 * maxSpeed - maxSpeed;
      let newVY = Math.random() * 2 * maxSpeed - maxSpeed;
      let newFish = new Fish(newX, newY, newVX, newVY, this.color);
      if (this.color === fish1Color) {
        fish1.value.push(newFish);
      } else {
        fish2.value.push(newFish);
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

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, foodSize, 0, 2 * Math.PI);
    ctx.fillStyle = '#00FF00';
    ctx.fill();
  }
}

// Spawn fish and food
for (let i = 0; i < numFish; i++) {
  let x1 = Math.random() * 600;
  let y1 = Math.random() * 600;
  let vx1 = Math.random() * 2 * maxSpeed - maxSpeed;
  let vy1 = Math.random() * 2 * maxSpeed - maxSpeed;
  let f1 = new Fish(x1, y1, vx1, vy1, fish1Color);
  fish1.value.push(f1);

  let x2 = Math.random() * 600;
  let y2 = Math.random() * 600;
  let vx2 = Math.random() * 2 * maxSpeed - maxSpeed;
  let vy2 = Math.random() * 2 * maxSpeed - maxSpeed;
  let f2 = new Fish(x2, y2, vx2, vy2, fish2Color);
  fish2.value.push(f2);
}

function animate() {
  ctx.clearRect(0, 0, 600, 600);

  // Spawn food
  if (Math.random() < foodSpawnRate) {
    let x = Math.random() * 600;
    let y = Math.random() * 600;
    let newFood = new Food(x, y);
    food.value.push(newFood);
  }

  // Draw and move fish
  for (let i = 0; i < fish1.value.length; i++) {
    let f = fish1.value[i];
    if (f.alive) {
      f.draw();
      f.move();
      f.reproduce();
    } else {
      fish1.value.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < fish2.value.length; i++) {
    let f = fish2.value[i];
    if (f.alive) {
      f.draw();
      f.move();
      f.reproduce();
    } else {
      fish2.value.splice(i, 1);
      i--;
    }
  }

  // Draw food
  for (let i = 0; i < food.value.length; i++) {
    food.value[i].draw();
  }

  // Stop if one species dies out
    if (fish1.value.length === 0 || fish2.value.length === 0) {
      return;
    }

  // Update stats
  ticksRun.value++;
  requestAnimationFrame(animate);
}
</script>