<template>
    <div class="leading-normal tracking-normal text-gray-800 gradient">
    <section class="bg-white py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <p class="w-full my-2 text-5xl font-bold leading-tight text-center">
            Species with a Large Impact 
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class="w-full my-2 text-md text-gray-600 font-bold leading-tight text-center">
            Some species in an ecosystem play an especially larger role in the ecosystem, often by being the largest or by occupying a unique niche
        </p>

        <p class="w-full mt-12 mb-2 text-3xl font-semibold leading-tight text-center">
            Types of Important Species
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Dominant Species
            </p>
            <p class="text-gray-600 mb-8">
                Dominant species are the species that are either the most abundant or have the highest biomass. The death of a dominant species can drastically effect the whole ecosystem because it usually means a large loss of biomass
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/dominant.svg" class="max-h-40 mx-auto" />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/keystone.svg" class="max-h-40 mx-auto" />
          </div>
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Keystone Species
            </p>
            <p class="text-gray-600 mb-8">
                Keystone species are not dominant, but they usually occupy a specific niche that makes them important
            </p>
          </div>
        </div>

        <p class="w-full mt-12 mb-2 text-3xl font-semibold leading-tight text-center">
            Examples
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12">
            <div class="w-full ">
                <img class="w-full h-64 rounded-lg" src="~/assets/svgs/moon.svg" />
                
                <p class="text-2xl text-center font-bold rounded-lg mt-8">Sea Otters</p>
                <p class="text-md text-center rounded-lg font-normal">Sea otters eat sea urchins which eat kelp. If sea otters are absent, then kelp forests collapse, causing a chain reaction of disturbance</p>
            </div>

            <div class="w-full ">
                <img class="w-full h-64 rounded-lg" src="~/assets/svgs/mountain.svg" />
                
                <p class="text-2xl text-center font-bold rounded-lg mt-8">Beavers</p>
                <p class="text-lg text-center rounded-lg">For example, animals who live on treetops vs on the ground</p>
            </div>
        </div>
      </div>
    </section>
    <BackButton />
    </div>
</template>
