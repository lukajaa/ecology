<template>
    <div class="leading-normal tracking-normal text-gray-800 gradient">
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <p class="w-full my-2 text-5xl font-bold leading-tight text-center">
            Predation and Symbiosis
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <p class="w-full mt-12 mb-2 text-4xl font-bold leading-tight text-center">
            Symbiosis
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Parasitism
            </p>
            <p class="text-gray-600 mb-8">
                Parasitism is when a parasite organism feeds on a host organism and takes its nutrients. The types of parasites are exoparasites (latch onto outside of the host) and endoparasites (latch onto inside of the host).
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/parasitism.svg" class="max-h-48 mx-auto" />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/mutualism.svg" class="max-h-48 mx-auto" />
          </div>
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Mutualism
            </p>
            <p class="text-gray-600 mb-8">
                Mutualism is a mutually beneficial form of symbiosis in which two organisms help each other. In obligate mutualism, one/both organisms cannot survive without each other, while in facilitative mutualism, both organisms can survive without each other.
            </p>
          </div>
        </div>
        <div class="container px-6 py-10 mx-auto">
            <p class="w-full mt-12 mb-2 text-4xl font-bold leading-tight text-center">
            Predation
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class="text-center text-gray-600">Predation is when one organism (the predator) kills and eats another organism (the prey)</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 xl:mt-12 xl:gap-12">
            <div class="w-full ">
                <img class="w-full h-48 rounded-lg" src="~/assets/svgs/herbivory.svg" />
                
                <p class="text-2xl text-center font-bold rounded-lg mt-8">Herbivores</p>
                <p class="text-md text-center rounded-lg">Herbivores are the lowest level of predators; they feed on plants like grass</p>
            </div>

            <div class="w-full ">
                <img class="w-full h-48 rounded-lg" src="~/assets/svgs/carnivore.svg" />
                
                <p class="text-2xl text-center font-bold rounded-lg mt-8">Carnivores</p>
                <p class="text-md text-center rounded-lg">Carnivores prey on herbivores</p>
            </div>

            <div class="w-full ">
                <img class="w-full h-48 rounded-lg" src="~/assets/svgs/tertiary.svg" />
                
                <p class="text-2xl text-center font-bold rounded-lg mt-8">Higher Level Carnivores</p>
                <p class="text-md text-center rounded-lg">Higher level carnivores prey on other carnivores (they are rare because a lot of energy is lost in each tier of predation)</p>
            </div>
        </div>
    </div>
      </div>
    </section>
    <BackButton />
    </div>
</template>