function manufacture(gifts: string[], materials: string) {
  let finalsGifts: string[] = []
  for (let i = 0; i < gifts.length; i++) {
    let count = 0
    for (let j = 0; j < gifts[i].length; j++) {
      if (materials.includes(gifts[i][j])) {
        count++
      }
    }
    if (count === gifts[i].length) finalsGifts.push(gifts[i])
  }
  return finalsGifts
}
