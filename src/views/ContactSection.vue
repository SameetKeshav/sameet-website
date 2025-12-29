<template>
  <section id="contact" class="py-20 max-w-xl mx-auto">
    <h2 class="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>

    <form @submit.prevent="send" class="space-y-4">
      <input type="email" v-model="email"
             placeholder="Your email"
             class="w-full p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"/>
      <textarea v-model="message"
                rows="5"
                placeholder="Message"
                class="w-full p-3 rounded border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"></textarea>
      <button type="submit" class="px-6 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
        Send
      </button>
    </form>

    <p v-if="sent" class="mt-4 text-green-600">Thanks! I’ll reply soon.</p>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const email = ref('')
const message = ref('')
const sent = ref(false)

function send() {
  console.log({ email: email.value, message: message.value })
  sent.value = true
}
</script>
