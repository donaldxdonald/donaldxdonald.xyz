<script setup lang="ts">
const imgSrc = ref('')
const avgColor = ref('#fff')
const showBg = ref(false)

</script>

<template>
  <div class="main-page">
    <div v-show="showBg && imgSrc.length" class="bg-wrap">
      <div class="bg__modal" :style="{'background-color': avgColor}" />
      <img class="bg__img" :src="imgSrc" alt="">
    </div>
    <Introduction></Introduction>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
