<script setup>
import { ref } from 'vue'
import { autorun } from 'vue-meteor-tracker'

const count = ref(0)

const currentUser = ref()

function increment() {
  count.value++
}

autorun(() => currentUser.value = Meteor.user())
</script>

<template>
  <template v-if="currentUser">
    <h2 class="text-2xl font-bold my-3" :class="'text-'+currentUser.colour">Hi {{currentUser.username}}!</h2>
  </template>`
  <button @click="increment" class="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded">Click Me</button>
  <p>
    You've pressed the button <strong>{{ count }}</strong> times.
  </p>
</template>
