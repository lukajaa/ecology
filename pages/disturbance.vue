<template>
    <div class="leading-normal tracking-normal text-gray-800 gradient">
    <section class="bg-white py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <p class="w-full my-2 text-5xl font-bold leading-tight text-center">
            Disturbance
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class="w-full my-2 text-md text-gray-600 font-bold leading-tight text-center">
            A disturbance is an event that changes the organism makeup of an ecosystem, making them ever-changing and dynamic
        </p>

        <p class="w-full mt-12 mb-2 text-3xl font-semibold leading-tight text-center">
            Key Ideas
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Intermediate Disturbance Hypothesis
            </p>
            <p class="text-gray-600 mb-8">
                The Intermediate Disturbance Hypothesis suggests moderate levels of disturbance create more diversity than either small or high levels. This is because high levels of disturbance totally destroy ecosystems, while small levels of disturbance often only harm certain groups, allowing existing groups to fill their niches.
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/disturbance.svg" class="max-h-40 mx-auto" />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/succession.svg" class="max-h-40 mx-auto" />
          </div>
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Ecological Succession
            </p>
            <p class="text-gray-600 mb-8">
                Ecological succession is the process that describes how a disturbed area's existing community is replaced by a set of new species, and then another, and then another.
            </p>
          </div>
        </div>

        <p class="w-full mt-12 mb-2 text-3xl font-semibold leading-tight text-center">
            Types of Disturbance
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12">
            <div class="w-full">
              <img src="~/assets/svgs/herbivory.svg" class="w-full h-48 rounded-lg" />
                
                <p class="text-2xl text-center font-bold rounded-lg mt-8">Natural</p>
                <p class="text-md text-center rounded-lg font-normal text-gray-600">Natural disasters such as volcanoes, tsunamis, and hurricanes are the largest forms of ecological disturbance</p>
            </div>

            <div class="w-full">
              <img src="~/assets/svgs/man-made.svg" class="w-full h-48 rounded-lg" />
                
                <p class="text-2xl text-center font-bold rounded-lg mt-8">Man-made</p>
                <p class="text-md text-center rounded-lg text-gray-600">Though natural disasters are still very impactful, human activities such as trawling, deforestation, agriculture, and industry are the main drivers of ecosystem disturbance</p>
            </div>
        </div>
      </div>
    </section>
    <BackButton />
    </div>
</template>