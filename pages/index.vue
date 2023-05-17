<template>
  <div class="leading-normal tracking-normal text-white gradient">
    <!--Hero-->
    <div class="bg-white text-center mt-24 md:mt-60 text-black">
      <h1 class="mt-4 mb-2 text-7xl font-black">
        Community Ecology
      </h1>
      <img src="~/assets/svgs/underline.svg" class="mx-auto" />
      <p class="text-2xl mt-4">Explore how ecosystems are structured through interactive simulations!</p>
      <div class="flex flex-row justify-center space-x-8 mt-4">
        <div class="flex flex-col">
          <NuxtLink to="/lab">
            <button class="bg-teal-500 text-white font-bold rounded-full py-4 px-8 shadow-lg transition hover:scale-105 ease-in-out">Lab Report</button>
          </NuxtLink>
        </div>
        <div class="flex flex-col">
          <button class="bg-teal-500 text-white font-bold rounded-full py-4 px-8 shadow-lg transition hover:scale-105 ease-in-out" @click="random_page()">Random Page</button>
        </div>
      </div>
      <img src="~/assets/svgs/arrow.svg" class="mx-auto mt-8" />
    </div>

    <section class="bg-white pb-8 md:pt-24">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Topics
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <NuxtLink class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" to="/niches">
          <div class="flex-1 bg-white rounded overflow-hidden shadow py-4 transition ease-in-out hover:scale-105">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Competition and Niches
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Explore how organisms find their niches in a competitive ecosystem
              </p>
            </a>
          </div>
        </NuxtLink>
        <NuxtLink class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" to="/competition">
          <div class="flex-1 bg-white rounded overflow-hidden shadow py-4 transition ease-in-out hover:scale-105">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Predation and Symbiosis
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Explore the fundamentals of how different organisms interact with each other
              </p>
            </a>
          </div>
        </NuxtLink>
        <NuxtLink class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" to="/diversity">
          <div class="flex-1 bg-white rounded overflow-hidden shadow py-4 transition ease-in-out hover:scale-105">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Species Diversity
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Explore how diversity is calculated and how it can strengthen an ecosystem
              </p>
            </a>
          </div>
        </NuxtLink>
        <NuxtLink class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" to="/species">
          <div class="flex-1 bg-white rounded overflow-hidden shadow py-4 transition ease-in-out hover:scale-105">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Species with a Large Impact
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Explore which species have the largest impact on their ecosystems
              </p>
            </a>
          </div>
        </NuxtLink>
        <NuxtLink class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" to="/controls">
          <div class="flex-1 bg-white rounded overflow-hidden shadow py-4 transition ease-in-out hover:scale-105">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Top/Down and Bottom/Up Controls
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Explore how certain species can control the entire ecosystem
              </p>
            </a>
          </div>
        </NuxtLink>
        <NuxtLink class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" to="/disturbance">
          <div class="flex-1 bg-white rounded overflow-hidden shadow py-4 transition ease-in-out hover:scale-105">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Disturbance
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Explore how both natural and human-made disturbances can affect an ecosystem
              </p>
            </a>
          </div>
        </NuxtLink>
      </div>
    </section>
  
    <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#fff">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <section class="container mx-auto text-center py-6">
      <h3 class="my-4 text-lg leading-tight">
        Created by Lucas Chang | <span @click="sourcesModal = true">Sources</span>
      </h3>
    </section>
    <div v-if="sourcesModal" class="w-screen h-screen top-0 fixed" style="background-color: rgba(0, 0, 0, 0.5);">
      <!-- center modal -->
      <div class="w-1/2 h-1/2 bg-white rounded-lg shadow-lg p-8 m-auto relative mt-48">
        <!-- modal close button -->
        <button @click="sourcesModal = false" class="absolute top-0 right-0 mt-4 mr-4">
          <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z"
            ></path>
          </svg>
        </button>
        <div class="text-left text-black opacity-100">
          <h3 class="text-2xl">Sources</h3>
          <ul class="list-disc list-inside">
            <li class=mt-1>
              <a class="sources_link" href="https://www.khanacademy.org/science/ap-college-environmental-science/x0b0e430a38ebd23f:the-living-world-ecosystems-and-biodiversity/x0b0e430a38ebd23f:intro-to-biodiversity-and-biogeography/a/species-diversity-and-ecosystem-resilience" target="_blank">https://www.khanacademy.org/science/ap-college-environmental-science/x0b0e430a38ebd23f:the-living-world-ecosystems-and-biodiversity/x0b0e430a38ebd23f:intro-to-biodiversity-and-biogeography/a/species-diversity-and-ecosystem-resilience</a>
            </li>
            <li class=mt-1>
              <a class="sources_link" href="https://www.khanacademy.org/science/ap-biology/ecology-ap/community-ecology/a/niches-competition" target="_blank">https://www.khanacademy.org/science/ap-biology/ecology-ap/community-ecology/a/niches-competition</a>
            </li>
            <li class=mt-1>
              <a class="sources_link" href="https://www.jstor.org/stable/24873136" target="_blank">https://www.jstor.org/stable/24873136</a>
            </li>
            <li class=mt-1>
              <a class="sources_link" href="https://en.wikipedia.org/wiki/Trophic_cascade" target="_blank">https://en.wikipedia.org/wiki/Trophic_cascade</a>
            </li>
            <li class=mt-1>
              <a class="sources_link" href="https://www.britannica.com/science/ecological-succession" target="_blank">https://www.britannica.com/science/ecological-succession</a>
            </li>
            <li class=mt-1>
              <a class="sources_link" href="https://www.britannica.com/science/food-web" target="_blank">https://www.britannica.com/science/food-web</a>
            </li>
            <li class=mt-1>
              Biology 2 Textbook Chapter 48
            </li>
          </ul>
          </div>
          </div>
    </div>
</div>
</template>

<script setup>
const sourcesModal = ref(false);

function random_page() {
  const pages = [
    "/niches",
    "/competition",
    "/diversity",
    "/species",
    "/controls",
    "/disturbance"
  ];
  const random = Math.floor(Math.random() * pages.length);
  window.location.href = pages[random];
}
</script>