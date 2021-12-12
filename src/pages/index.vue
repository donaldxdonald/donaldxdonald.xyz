<script setup lang="ts">
import { ref, Ref, onMounted, reactive, computed } from 'vue'
import { queryBgImg } from '~/api/image'
import { ImageDetail } from '~/api/image.type'
const showBg: Ref<undefined|string> = ref(undefined)
const bgImgConfig: ImageDetail[] = reactive([])
const fetchBgConfig = async() => {
  const result = await queryBgImg()
  Object.keys(result).forEach(imageKey => {
    const imageData: ImageDetail = {
      ...result[imageKey],
      type: imageKey,
    }
    bgImgConfig.push(imageData)
  })
}
onMounted(() => {
  fetchBgConfig()
})
const hoveringContent = computed(() => {
  return bgImgConfig.find(item => item.type === showBg.value)
})
const onHovering = (hoveringObj: string) => {
  if (bgImgConfig.length === 0) {
    return
  }
  showBg.value = hoveringObj
}

const onLeaving = () => {
  showBg.value = undefined
}

</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <div
      v-for="(item, index) in bgImgConfig"
      :key="index"
      class="absolute inset-0 w-full h-full z-99 opacity-0"
      :class="showBg === item.type && 'fade-in'"
    >
      <div class="absolute inset-0 h-full w-screen opacity-65" :style="{'background-color': item.avgColor}" />
      <img class="h-full w-full object-cover" :src="item.url">
    </div>
    <div class="absolute inset-0 z-99">
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

<route lang="yaml">
meta:
  layout: home
</route>
