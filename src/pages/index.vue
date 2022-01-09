<script setup lang="ts">
import { ref, Ref, onMounted, reactive, computed } from 'vue'
import { queryBgImg } from '~/api/image'
import { ImageData } from '~/api/image.type'
import MatrixRain from '~/components/MatrixRain.vue'
import { toggleDark } from '~/composables'
const showBg: Ref<undefined|string> = ref(undefined)
const bgImgConfig: ImageData[] = reactive([])
const fetchBgConfig = async() => {
  const result = await queryBgImg()
  result.forEach(item => bgImgConfig.push(item))
}
onMounted(() => {
  fetchBgConfig()
})
const hoveringContent = computed(() => {
  return bgImgConfig.find(item => item.type === showBg.value)
})
const onHovering = (hoveringObj: string) => {
  if (hoveringObj === 'programming') {
    toggleDark()
  }
  showBg.value = hoveringObj
}

const onLeaving = () => {
  if (showBg.value === 'programming') {
    toggleDark()
  }
  showBg.value = undefined
}

</script>

<template>
  <div class="relative w-screen h-screen text-center overflow-hidden">
    <div class="absolute inset-0 opacity-0" :class="showBg === 'programming' && 'fade-in'">
      <MatrixRain />
    </div>
    <div
      v-for="(item, index) in bgImgConfig"
      :key="index"
      class="absolute inset-0 w-full h-full opacity-0"
      :class="showBg === item.type && 'fade-in'"
    >
      <div class="absolute inset-0 h-full w-screen opacity-60" :style="{'background-color': item.avgColor}" />
      <img class="h-full w-full object-cover" :src="item.url">
    </div>
    <div class="absolute inset-0">
      <Introduction
        :bg-color="hoveringContent?.avgColor || '#eee'" @hovering="onHovering"
        @leaving="onLeaving"
      />
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
