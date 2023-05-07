<template>
    <div class="leading-normal tracking-normal text-gray-800 gradient">
    <section class="bg-white py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <p class="w-full my-2 text-5xl font-bold leading-tight text-center">
            Ecosystem Controls
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class="w-full my-2 text-md text-gray-600 font-bold leading-tight text-center">
            Changing the level of one species can have a large impact on the rest of the ecosystem. Thus, one species can be considered a control for the ecosystem.
        </p>

        <p class="w-full mt-12 mb-2 text-3xl font-semibold leading-tight text-center">
            Two Types of Controls
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Bottom Up Model
            </p>
            <p class="text-gray-600 mb-8">
                nutrients ➡️ vegetation ➡️ herbivores ➡️ predators <br/>
                This model assumes that the bottom of the food chain (nutrients) is the control for the rest of the ecosystem. Thus, an increase in nutrients will cause an increase in all other species and vice versa.
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <Icon name="mdi:arrow-up-bold" class="h-40 w-full mx-auto" />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 p-6">
            <Icon name="mdi:arrow-down-bold" class="h-40 w-full mx-auto" />
          </div>
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Top Down Model
            </p>
            <p class="text-gray-600 mb-8">
                nutrients ⬅️ vegetation ⬅️ herbivores ⬅️ predators <br/>
                Unlike the bottom up model, a change in the top of the chain does not result in a uniform change in each of the other tiers. If, for example, the predator population increases, the herbivore population will decrease, which will cause the vegetation population to increase, which will cause the nutrient population to decrease.
            </p>
          </div>
        </div>
      </div>
    </section>
    <BackButton />
    </div>
</template>
