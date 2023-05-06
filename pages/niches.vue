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

    <p class="text-center text-lg mt-4 mb-8">Food: {{ foodCount }} | Deer1: {{ deer1Count }} Deer2: {{ deer2Count }}</p>
    <canvas id="canvas" width="600" height="600" class="outline outline-black outline-1 mx-auto"></canvas>
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

const foodCount = ref(100);
const deer1Count = ref(10);
const deer2Count = ref(10);

var ctx;

onMounted(() => {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
})

class Deer {
    constructor(x, y, direction, type) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.energy = 0;
        this.target = null;
        this.type = type;
        this.time_alive = 0;
    }
    draw() {
        if (this.type == 1) {
            ctx.fillStyle = "red";
        } else {
            ctx.fillStyle = "blue";
        }
        ctx.fillRect(this.x, this.y, 10, 10);

        /*
        ctx.beginPath();
        ctx.arc(this.x + 2.5, this.y + 2.5, 100, 0, 2 * Math.PI);
        ctx.stroke();
        */
        
    }
    sense() {
        var closest = null;
        var closestDistance
        for (var i = 0; i < food.length; i++) {
            var dx = food[i].x - this.x;
            var dy = food[i].y - this.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (!closest || distance < closestDistance) {
                var taken = false;
                for (var j = 0; j < deer.length; j++) {
                    if (deer[j] == this) {
                        continue;
                    }
                    if (deer[j].target == food[i] && deer[j].type == this.type) {
                        taken = true;
                        break;
                    }
                }
                if (taken) {
                    continue;
                }
                closest = food[i];
                closestDistance = distance;
            }
        }
        this.target = closest;
        if (closest) {
            var dx = closest.x - this.x;
            var dy = closest.y - this.y;
            this.direction = Math.atan2(dy, dx) * 180 / Math.PI;
        }
    }
    move() {
        this.time_alive += 1;

        var radians = this.direction * Math.PI / 180;
        if (this.type == 1) {
            this.x += Math.cos(radians);
            this.y += Math.sin(radians);
        } else {
            this.x += Math.cos(radians);
            this.y += Math.sin(radians);
        }

        if (this.time_alive > 100) {this.energy -= 0.1;}
        if (this.energy < 0) {
            deer.splice(deer.indexOf(this), 1);
        }

        if (this.x < 0 || this.x > 590 || this.y < 0 || this.y > 590) {
            this.direction = this.direction + Math.random() * 120 + 120;
            if (this.direction > 360) {
                this.direction -= 360;
            }
        }
    }
    eat() {
        if (this.target) {
            var dx = this.target.x - this.x;
            var dy = this.target.y - this.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 10) {
                food.splice(food.indexOf(this.target), 1);
                this.energy += 3;
                this.target = null;
            }
        }
    }
    birth() {
        if (this.energy >= 9 && this.type == 1) {
            this.energy -= 4.5;
            var baby_x = this.x + Math.random() * 10 - 5;
            var baby_y = this.y + Math.random() * 10 - 5;
            deer.push(new Deer(baby_x, baby_y, Math.random() * 360, this.type));
        } 
        if (this.energy >= 10 && this.type == 2) {
            this.energy -= 5;
            var baby_x = this.x + Math.random() * 10 - 5;
            var baby_y = this.y + Math.random() * 10 - 5;
            deer.push(new Deer(baby_x, baby_y, Math.random() * 360, this.type));
        }
    }
}

var deer = []
for (var i = 0; i < 10; i++) {
    deer.push(new Deer(Math.random() * 580 + 10, Math.random() * 580 + 10, Math.random() * 360, 1));
}

for (var i = 0; i < 10; i++) {
    deer.push(new Deer(Math.random() * 580 + 10, Math.random() * 580 + 10, Math.random() * 360, 2));
}

var food = []
for (var i = 0; i < 100; i++) {
    food.push({
        x: Math.random() * 580 + 10,
        y: Math.random() * 580 + 10
    });
}

setInterval(function() {
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = "rgb(205,133,63)";
    ctx.fillRect(0, 0, 600, 600);
    for (var i = 0; i < food.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(food[i].x, food[i].y, 4, 4);
    }

    for (var i = 0; i < deer.length; i++) {
        deer[i].sense();
        deer[i].move();
        deer[i].eat();
        deer[i].draw();
        deer[i].birth();
    }

    food.push({
        x: Math.random() * 580 + 10,
        y: Math.random() * 580 + 10
    });

    foodCount.value = food.length;
    deer1Count.value = 0;
    deer2Count.value = 0;
    for (var i = 0; i < deer.length; i++) {
        if (deer[i].type == 1) {
            deer1Count.value++;
        } else {
            deer2Count.value++;
        }
    }
}, 10);

</script>