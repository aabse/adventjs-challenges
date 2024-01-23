function createChristmasTree(ornaments: string, height: number) {
  let tree = ''
  let width = 1
  let k = 0
  for (let i = 0; i < height; i++) {
    let line = ''
    for (let j = 0; j < width; j++) {
      line += ornaments[(k)%ornaments.length]
      k++
    }
    line = line.split('').join(' ')
      .padStart(height+i)
    tree += line
    tree += "\n"
    width++
  }
  tree += "|".padStart(height)
  tree += "\n"
  return tree
}
