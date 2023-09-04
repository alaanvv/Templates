
const canvas = document.querySelector('canvas')
canvas.width = 100
canvas.height = 100
const ctx = canvas.getContext('2d')
// ctx.translate(canvas.width / 2, canvas.height / 2) // Active for centering (0, 0)

// ---

function dot(x, y, c) {
  ctx.fillStyle = c
  ctx.fillRect(x, y, 1, 1)
}

function clear() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// ---
