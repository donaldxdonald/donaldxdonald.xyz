<script setup lang="ts">
import { useHead } from '@vueuse/head'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'DonaldxDonald',
  meta: [
    { name: 'og:title', content: 'DonaldxDonald' },
    { name: 'og:description', content: 'Hi there, here is Donald Mok\'s block~' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'DonaldxDonald' },
    { name: 'description', content: 'Hi there, here is Donald Mok\'s block~' },
  ],
})
</script>

<template>
  <router-view />
</template>
