<script setup lang="ts">
import { ref, Ref } from 'vue';
import MatrixRain from '~/components/MatrixRain.vue';
const showBg: Ref<undefined|string> = ref(undefined)

const onHovering = (hoveringObj: string) => {
  showBg.value = hoveringObj
}

const onLeaving = () => {
  showBg.value = undefined
}

</script>

<template>
  <div class="relative w-screen h-screen text-center overflow-hidden">
    <div class="absolute inset-0 opacity-0" :class="showBg === 'programming' && 'fade-in'">
      <MatrixRain />
    </div>
    <div class="absolute inset-0">
      <Introduction @hovering="onHovering" @leaving="onLeaving" />
    </div>
  </div>
</template>

<style scoped>
.fade-in {
	animation: fade-in 300ms ease-in-out both;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
