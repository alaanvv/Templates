
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

function line(x1, y1, x2, y2, c) {
  const x_size = Math.abs(x1 - x2) + 1
  const y_size = Math.abs(y1 - y2) + 1
  const x_step = Math.sign(x2 - x1)
  const y_step = Math.sign(y2 - y1)

  const x_per_y = x_size / y_size

  let y
  for (let x = x1; x !== x1 + x_step * x_size || y !== y1 + y_step * y_size; x += x_step) {
    y = Math.round(y1 + (x - x1) / x_per_y * y_step)
    
    for (let y_streak = 0; y_streak < 1 / x_per_y; y_streak++) {
      dot(x, y, c)
      y++
    }
  }
}

function clear() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// ---
