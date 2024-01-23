function maxGifts(houses: number[]) {
  const dp = houses.slice(0, 2)
  for (const house of houses.slice(2)) {
    dp.push(Math.max(...dp.slice(0,-1)) + house)
  }
  return Math.max(...dp)
}
