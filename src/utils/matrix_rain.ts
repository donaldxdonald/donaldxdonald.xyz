
export const matrixText = () => {
  const offscreenCanvas = document.createElement('canvas')
  offscreenCanvas.width = 30
  offscreenCanvas.height = 1000
  offscreenCanvas.style.display = 'none'
  document.body.appendChild(offscreenCanvas)
  const octx = offscreenCanvas.getContext('2d') as CanvasRenderingContext2D
  octx.textAlign = 'center'
  octx.shadowColor = 'lightgreen'
  octx.shadowOffsetX = 2
  octx.shadowOffsetY = -5
  octx.shadowBlur = 1
  octx.fillStyle = 'darkgreen'
  octx.textAlign = 'left'
  let step = 10
  for (let i = 0; i < 100; i++) {
    let charCode = 0
    while (charCode < 60) {
      charCode = Math.floor(Math.random() * 100)
      const canvas = document.getElementById('Matrix') as HTMLCanvasElement
      if (!canvas) {
        continue
      }
      const context = canvas.getContext('2d')!

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const katakana = ' アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
      const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const nums = '0123456789'

      const alphabet = katakana + latin + nums

      const fontSize = 16
      const columns = canvas.width / fontSize

      const rainDrops: number[] = []

      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1
      }

      const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)'
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = '#0F0'
        context.font = fontSize + 'px monospace'

        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize)

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0
          }
          rainDrops[i]++
        }
      }
    }
    octx.fillText(String.fromCharCode(charCode), 0, step)
    step += 10
  }
  return offscreenCanvas
}
export class MatrixTextLine {
  text = matrixText()
  posX = Math.floor(Math.random() * window.innerWidth)
  offsetY = -1000
  animate() {
    if (this.offsetY >= 0) {
      this.offsetY = -1000
    }
    this.offsetY += 10
    return this.offsetY
  }
}
