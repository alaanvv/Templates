
const canvas = document.querySelector('canvas')
canvas.width = 100
canvas.height = 100
const ctx = canvas.getContext('2d')
// ctx.translate(canvas.width / 2, canvas.height / 2) // Active for centering (0, 0)

// ---

function dot(x, y, c) {
  if (isNaN(x) || x === Infinity || typeof x !== 'number') throw `Invalid "x" value in "dot" function: ${x} ${typeof x}`
  if (isNaN(y) || y === Infinity || typeof y !== 'number') throw `Invalid "y" value in "dot" function: ${y} ${typeof y}`

  x = Math.round(x)
  y = Math.round(y)
   
  ctx.fillStyle = c
  ctx.fillRect(x, y, 1, 1)
}

function line(x1, y1, x2, y2, c) {
  if (isNaN(x1) || x1 === Infinity || typeof x1 !== 'number') throw `Invalid "x1" value in "dot" function: ${x1} ${typeof x1}`
  if (isNaN(y1) || y1 === Infinity || typeof y1 !== 'number') throw `Invalid "y1" value in "dot" function: ${y1} ${typeof y1}`
  if (isNaN(x2) || x2 === Infinity || typeof x2 !== 'number') throw `Invalid "x2" value in "dot" function: ${x2} ${typeof x2}`
  if (isNaN(y2) || y2 === Infinity || typeof y2 !== 'number') throw `Invalid "y2" value in "dot" function: ${y2} ${typeof y2}`

  x1 = Math.round(x1)
  y1 = Math.round(y1)
  x2 = Math.round(x2)
  y2 = Math.round(y2)

  // Reminder: check Bresenham's Line Algorithm
  const x_size = Math.abs(x1 - x2) + 1
  const y_size = Math.abs(y1 - y2) + 1

  const x_step = Math.sign(x2 - x1)
  const y_step = Math.sign(y2 - y1)

  const x_per_y = x_size / y_size
  const y_per_x = 1 / x_per_y

  if (x_per_y > 1) {
    for (let x = x1; x !== x2; x += x_step) {
      const current_x_size = Math.abs(x - x1)
      dot(x, y1 + Math.round(Math.trunc(current_x_size / x_per_y) * y_step), c)
    }

    dot(x2, y2, c) // It will not be placed automatically because of the way I did the for condition
  }
  else {
    for (let y = y1; y !== y2; y += y_step) {
      const current_y_size = Math.abs(y - y1)
      dot(x1 + Math.round(Math.trunc(current_y_size / y_per_x) * x_step), y, c)
    }

    dot(x2, y2, c)
  }
}

function rect(x, y, w, h, c) {
  if (isNaN(x) || x === Infinity || typeof x !== 'number') throw `Invalid "x" value in "dot" function: ${x} ${typeof x}`
  if (isNaN(y) || y === Infinity || typeof y !== 'number') throw `Invalid "y" value in "dot" function: ${y} ${typeof y}`
  if (w === 0 || h === 0) return

  for (let current_x = x; current_x - x < w; current_x++)
    line(current_x, y, current_x, y + h - 1, c)
}

function clear() {
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}
