function findFirstRepeated(gifts: number[]) {
  for (let i = 0; i < gifts.length; i++) {
    if (gifts.slice(0,i).includes(gifts[i])) {
      return gifts[i]
    }
  }
  return -1
}
