<template>
    <div class="leading-normal tracking-normal text-gray-800 gradient">
    <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <p class="w-full my-2 text-5xl font-bold leading-tight text-center">
            Ecosystem Diversity
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class="w-full my-2 text-md text-gray-600 font-bold leading-tight text-center">
            The more diverse an ecosystem is, the more stable it is and more resistant it is to invasive predators
        </p>

        <p class="w-full mt-12 mb-2 text-3xl font-semibold leading-tight text-center">
            How can we measure species diversity?
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class="w-full my-2 text-md text-gray-600 font-bold leading-tight text-center">
            Species diversity is the variety of different organisms in an ecosystem; it can be hard to measure due to very rare/microspoic and organisms
        </p>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Species Richness 
            </p>
            <p class="text-gray-600 mb-8">
              Species richness is the number of species there are in an ecosystem, regardless of ecosystem size
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/richness.svg" class="max-h-40 mx-auto" />
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 p-6">
            <img src="~/assets/svgs/abundance.svg" class="max-h-40 mx-auto" />
          </div>
          <div class="w-5/6 sm:w-1/2 p-6">
            <p class="text-3xl font-bold leading-none mb-3">
                Relative Abundance
            </p>
            <p class="text-gray-600 mb-8">
                Relative abundance is the proportion of each species in an ecosystem. For example, if there are 20 monkeys out of 100 animals, the relative abundance of monkeys is 20%
            </p>
          </div>
        </div>
        <div class="container px-6 py-10 mx-auto">
            <p class="w-full mt-12 mb-2 text-4xl font-bold leading-tight text-center">
            Shannon Diversity Index
        </p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-32 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p class="text-center text-gray-600">We can calculate the diversity of an ecosystem using the shannon diversity index</p>

        <img class="w-full max-w-xs my-8 mx-auto" src="~/assets/images/shannon.png" />

        <p class="text-center text-gray-600">
          Where p<sub>i</sub> is the proportion of each species in the ecosystem.
        </p>
        <p class="text-2xl font-semibold text-center mt-8">
          Still confused? Use your own values to calculate the shannon diversity index below!
        </p>
        <p class="text-center text-gray-600 mb-4">
          Enter the proportion of each species in the ecosystem below as a percent (e.g. 50% = 50)
        </p>

        <div class="flex flex-wrap gutter space-x-2 w-full items-center justify-center">
          <input v-for = "(value, index) in species" :key="index" v-model="species[index]" type="number" class="w-16 h-12 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:shadow-outline" />
          <input v-model="show_equation" type="checkbox" /> <span class="ml-4">Show Equation</span>
        </div>

        <p class="text-center text-gray-600 mt-4">
          <span v-if="show_equation">Equation: {{ shannon_equation }}</span>
          <br v-if="show_equation" />
          Index: {{ shannon }}
        </p>

    </div>
      </div>
    </section>
    <BackButton />
    </div>
</template>

<script setup>
const species = ref([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
const total = computed(() => species.value.reduce((a, b) => a + b, 0))
const show_equation = ref(false)

const shannon = computed(() => {
  if (total.value != 100) {
    return "Total must be 100%"
  }

  let sum = 0
  for (let i = 0; i < species.value.length; i++) {
    if (species.value[i] == 0) {
      continue
    }
    const p = species.value[i] / 100
    sum += p * Math.log(p)
  }
  return -sum
})

const shannon_equation = computed(() => {
  let output = "H = "
  for (let i = 0; i < species.value.length; i++) {
    if (species.value[i] == 0) {
      continue
    }
    const p = species.value[i] / 100
    output += `${p.toFixed(2)} * log(${p.toFixed(2)})`
    if (i != species.value.length - 1) {
      output += " + "
    }
  }
  return output
})
</script>