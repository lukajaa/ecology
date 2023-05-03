<template>
    <div class="bottom-hue">
    <div class="min-h-screen h-full px-10 pb-10 font-mono text-slate-800 text-center hue">
        <div class="w-9/12 mx-auto">
            <p class="text-7xl font-bold pt-48">Competition and Ecological Niches</p>
            <p class="text-xl mt-4">Interspecific competition is competition over a certain resource (often food) that forces organisms into niches</p>
        

            <p class="text-3xl mt-8 font-semibold">What is a Niche?</p>
            <div class="flex flex-row shadow rounded-lg bg-white">
                <div class="flex flex-col w-3/12">
                    <img src="http://homesfeed.com/wp-content/uploads/2015/08/Huge-single-wall-niche.jpg" class="rounded-lg"/>
                </div>
                <div class="flex flex-col w-9/12 p-8">
                    <div class="flex flex-row text-lg font-semibold">
                        What is a Niche?
                    </div>
                    <div class="flex flex-row text-md caption">
                        An ecological niche is the role and position a species has in its environment. ie. what it eats, what eats it, and how it behaves. Two organisms cannot occupy the same niche because they will compete for the same resources and one will eventually die out.
                    </div>
                </div>
            </div>
            <!-- infographic card explaining what a niche is -->

        
            <p class="text-3xl mt-8">Ecological Niche</p>
            <div class="text-left">
                <p class="text-md mt-2">When two organisms fight for the same limited food source, if one has even a slight reproductive edge, it will kill out the other species.</p>
                <p class="text-lg text-center mt-1">Possible Niches Include</p>
                <p class="text-md mt-1">- Time (nocturnal / diurnal)</p>
                <p class="text-md mt-1">- Place (higher up / lower down)</p>
                <p class="text-lg text-center mt-1">Fundamental Niche</p>
                <p class="text-md mt-1">Fundamental niche is the niche is the niche that an animal would occupy without any competition (what it is made to do)</p>
                <p class="text-lg text-center mt-1">Realized Niche</p>
                <p class="text-md mt-1">Realized niche is the niche that the organism actually occupies due to competition or other factors</p>
            </div>

            <p class="text-3xl mt-8">Character Displacement</p>
            <p class="text-md mt-2">Character displacement is the phenomenon that species separated can be mores similar than overlapping species</p>

            <p id="foodCount">Food: 100</p>
            <p id="deerCount">Deer: 0</p>
            <canvas id="canvas" width="600" height="600" style="border-color: black;border-width:1px;border-style:solid"></canvas>
        </div>
    </div>
    </div>
</template>

<style scoped>
.gradient {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}
.hue-temp {
  box-shadow: inset 0px 100px 100px -50px rgba(255, 0, 0, 0.1);
  background: linear-gradient(180deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 50%);
}
.bottom-hue-temp {
  box-shadow: inset 0px -100px 100px -50px rgba(255, 0, 0, 0.1);
  background: linear-gradient(0, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 50%);
}
</style>

<script setup>
/*
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
        this.energy = 5;
        this.target = null;
        this.type = type;
    }
    draw() {
        if (this.type == 1) {
            ctx.fillStyle = "red";
        } else {
            ctx.fillStyle = "blue";
        }
        ctx.fillRect(this.x, this.y, 5, 5);


        ctx.beginPath();
        ctx.arc(this.x + 2.5, this.y + 2.5, 100, 0, 2 * Math.PI);
        ctx.stroke();
    
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
        var radians = this.direction * Math.PI / 180;
        this.x += Math.cos(radians);
        this.y += Math.sin(radians);

        this.energy -= 0.1;
        if (this.energy < 0) {
            deer.splice(deer.indexOf(this), 1);
        }

        if (this.x < 0 || this.x > 595 || this.y < 0 || this.y > 595) {
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
            if (distance < 5) {
                food.splice(food.indexOf(this.target), 1);
                this.energy += 3;
                this.target = null;
            }
        }
    }
    birth() {
        if (this.energy >= 9 && this.type == 1) {
            this.energy -= 9;
            var baby_x = this.x + Math.random() * 10 - 5;
            var baby_y = this.y + Math.random() * 10 - 5;
            deer.push(new Deer(baby_x, baby_y, Math.random() * 360, this.type));
        } 
        if (this.energy >= 10 && this.type == 2) {
            this.energy -= 10;
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
        ctx.fillRect(food[i].x, food[i].y, 2, 2);
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
}, 10);
*/
</script>