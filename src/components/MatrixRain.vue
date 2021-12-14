<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'
const matrixCanvas: Ref<HTMLCanvasElement | null> = ref(null)
let canvas: HTMLCanvasElement | null
let context: CanvasRenderingContext2D | null

const katakana = 'マヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789'
const alphabet = katakana + latin + nums
const fontSize = 16
let columns = 0
const rainDrops: number[] = []

const initCanvas = () => {
  canvas = matrixCanvas.value
  if (canvas === null) {
    return
  }
  context = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  columns = canvas.width / fontSize
}

const initRainDrops = () => {
  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1
  }
}

const draw = () => {
  if (canvas === null || context === null) {
    return
  }
  context.fillStyle = 'rgba(0, 0, 0, 0.05)'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = '#0F0'
  context.font = `${fontSize}px monospace`

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0
    }
    rainDrops[i]++
  }
}

onMounted(() => {
  initCanvas()
  initRainDrops()
  setInterval(draw, 80)
})

</script>

<template>
  <canvas
    ref="matrixCanvas"
    :style="{'background-color': '#000'}"
  />
</template>
