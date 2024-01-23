function drawGift(size: number, symbol: string) {
  let draw = " ".repeat(size-1) + "#".repeat(size)+"\n"
  if (size < 2) return draw
  for (let i=0; i < size - 2; i++) {
  	draw += " ".repeat(size-2-i) + "#" + symbol.repeat(size-2) + "#"+ symbol.repeat(i) + "#\n"
  }
  draw += "#".repeat(size) + symbol.repeat(size-2) + "#\n"
  for (let i=(size - 2 - 1); i >= 0; i--) {
  	draw += "#" + symbol.repeat(size-2) + "#"+ symbol.repeat(i) + "#\n"
  }
  draw += "#".repeat(size)+"\n"
  return draw
}
