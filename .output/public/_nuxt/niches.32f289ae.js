import{_ as b}from"./BackButton.0e1758c5.js";import{a as M,r as x,s as S,b as I,i as f,t as u,u as g,f as N,e as R,o as B,x as C,y as F}from"./entry.47f37f97.js";import{_ as k,a as E}from"./mountain.f300c144.js";import"./nuxt-link.288147eb.js";const A=""+new URL("niche_1.8bd7f62d.svg",import.meta.url).href,D=""+new URL("food.7bbf0a98.svg",import.meta.url).href;const P=h=>(C("data-v-91d6358f"),h=h(),F(),h),T={class:"leading-normal tracking-normal text-gray-800 gradient"},V={class:"bg-white border-b py-8"},q={class:"container max-w-5xl mx-auto m-8"},z=R('<p class="w-full my-2 text-5xl font-bold leading-tight text-center" data-v-91d6358f> Competition and Ecological Niches </p><div class="w-full mb-4" data-v-91d6358f><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" data-v-91d6358f></div></div><div class="flex flex-wrap" data-v-91d6358f><div class="w-5/6 sm:w-1/2 p-6" data-v-91d6358f><p class="text-3xl text-gray-800 font-bold leading-none mb-3" data-v-91d6358f> What is a Niche? </p><p class="text-gray-600 mb-8" data-v-91d6358f> An ecological niche is the role and position a species has in its environment. ie. what it eats, what eats it, and how it behaves. </p><p class="text-xl text-gray-800 font-bold leading-none mb-3" data-v-91d6358f> Competitive Exclusion </p><p class="text-gray-600 mb-8" data-v-91d6358f> Two organisms cannot occupy the same niche because they will compete for the same resources and one will eventually die out. </p></div><div class="w-full sm:w-1/2 p-6" data-v-91d6358f><img src="'+A+'" class="max-h-48 mx-auto" data-v-91d6358f></div></div><div class="container px-6 py-10 mx-auto" data-v-91d6358f><p class="text-4xl text-center font-bold" data-v-91d6358f>Types of Niche</p><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 xl:mt-12 xl:gap-12" data-v-91d6358f><div class="w-full" data-v-91d6358f><img class="w-full h-64 rounded-lg" src="'+k+'" data-v-91d6358f><p class="text-2xl text-center font-bold rounded-lg" data-v-91d6358f>Time</p><p class="text-lg text-center rounded-lg" data-v-91d6358f>For example, nocturnal vs diurnal animals</p></div><div class="w-full" data-v-91d6358f><img class="w-full h-64 rounded-lg" src="'+E+'" data-v-91d6358f><p class="text-2xl text-center font-bold rounded-lg" data-v-91d6358f>Place</p><p class="text-lg text-center rounded-lg" data-v-91d6358f>For example, animals who live on treetops vs on the ground</p></div><div class="w-full" data-v-91d6358f><img class="w-full h-64 rounded-lg" src="'+D+'" data-v-91d6358f><p class="text-2xl text-center font-bold rounded-lg" data-v-91d6358f>Food</p><p class="text-lg text-center rounded-lg" data-v-91d6358f>For example, herbivores vs carnivores</p></div></div></div><div class="flex flex-row mt-12 outline-green-600 outline-1 outline p-12 rounded-lg" data-v-91d6358f><div class="flex flex-col w-6/12 px-4" data-v-91d6358f><p class="text-3xl text-center font-bold rounded-lg" data-v-91d6358f>Fundamental Niche</p><p class="text-lg text-center rounded-lg mt-4" data-v-91d6358f>A fundamental niche is the niche that an animal would occupy without any competition (what it is made to do)</p></div><div class="flex flex-col w-6/12 px-4" data-v-91d6358f><p class="text-3xl text-center font-bold rounded-lg" data-v-91d6358f>Realized Niche</p><p class="text-lg text-center rounded-lg mt-4" data-v-91d6358f>A realized niche is the niche that the organism actually occupies due to competition or other factors</p></div></div><p class="text-4xl text-center mt-12 font-bold" data-v-91d6358f>Simulation</p>',6),L={class:"text-center text-lg mt-4 mb-8"},O=P(()=>f("canvas",{id:"canvas",width:"600",height:"600",class:"outline outline-black outline-1 mx-auto"},null,-1)),U={__name:"niches",setup(h){const y=x(100),p=x(10),m=x(10);var d;S(()=>{var e=document.getElementById("canvas");d=e.getContext("2d")});class r{constructor(t,i,o,n){this.x=t,this.y=i,this.direction=o,this.energy=0,this.target=null,this.type=n,this.time_alive=0}draw(){this.type==1?d.fillStyle="red":d.fillStyle="blue",d.fillRect(this.x,this.y,10,10)}sense(){for(var t=null,i,o=0;o<s.length;o++){var n=s[o].x-this.x,v=s[o].y-this.y,_=Math.sqrt(n*n+v*v);if(!t||_<i){for(var w=!1,c=0;c<a.length;c++)if(a[c]!=this&&a[c].target==s[o]&&a[c].type==this.type){w=!0;break}if(w)continue;t=s[o],i=_}}if(this.target=t,t){var n=t.x-this.x,v=t.y-this.y;this.direction=Math.atan2(v,n)*180/Math.PI}}move(){this.time_alive+=1;var t=this.direction*Math.PI/180;this.type==1?(this.x+=Math.cos(t),this.y+=Math.sin(t)):(this.x+=Math.cos(t),this.y+=Math.sin(t)),this.time_alive>100&&(this.energy-=.1),this.energy<0&&a.splice(a.indexOf(this),1),(this.x<0||this.x>590||this.y<0||this.y>590)&&(this.direction=this.direction+Math.random()*120+120,this.direction>360&&(this.direction-=360))}eat(){if(this.target){var t=this.target.x-this.x,i=this.target.y-this.y,o=Math.sqrt(t*t+i*i);o<10&&(s.splice(s.indexOf(this.target),1),this.energy+=3,this.target=null)}}birth(){if(this.energy>=9&&this.type==1){this.energy-=4.5;var t=this.x+Math.random()*10-5,i=this.y+Math.random()*10-5;a.push(new r(t,i,Math.random()*360,this.type))}if(this.energy>=10&&this.type==2){this.energy-=5;var t=this.x+Math.random()*10-5,i=this.y+Math.random()*10-5;a.push(new r(t,i,Math.random()*360,this.type))}}}for(var a=[],l=0;l<10;l++)a.push(new r(Math.random()*580+10,Math.random()*580+10,Math.random()*360,1));for(var l=0;l<10;l++)a.push(new r(Math.random()*580+10,Math.random()*580+10,Math.random()*360,2));for(var s=[],l=0;l<100;l++)s.push({x:Math.random()*580+10,y:Math.random()*580+10});return setInterval(function(){d.clearRect(0,0,600,600),d.fillStyle="rgb(205,133,63)",d.fillRect(0,0,600,600);for(var e=0;e<s.length;e++)d.fillStyle="green",d.fillRect(s[e].x,s[e].y,4,4);for(var e=0;e<a.length;e++)a[e].sense(),a[e].move(),a[e].eat(),a[e].draw(),a[e].birth();s.push({x:Math.random()*580+10,y:Math.random()*580+10}),y.value=s.length,p.value=0,m.value=0;for(var e=0;e<a.length;e++)a[e].type==1?p.value++:m.value++},10),(e,t)=>{const i=b;return B(),I("div",T,[f("section",V,[f("div",q,[z,f("p",L,"Food: "+u(g(y))+" | Deer1: "+u(g(p))+" Deer2: "+u(g(m)),1),O])]),N(i)])}}},J=M(U,[["__scopeId","data-v-91d6358f"]]);export{J as default};