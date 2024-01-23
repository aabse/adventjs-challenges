// this solution fails in one secret test
// good solution in solution-2.ts found in internet

function maxGifts(houses: number[]) {
  if (houses.length <= 0) return 0
  let values: number[] = []
  for (let i = 0; i < houses.length; i++) {
    let maxiLeft = 0
    let maxiRight = 0
    let val: number = houses[i]
    if (i - 2 >= 0) {
      maxiLeft = maxGiftsAux(houses.slice(0,i-1))
    }
    if (i + 2 < houses.length) {
      maxiRight = maxGiftsAux(houses.slice(i+2,houses.length))
    }
    val += maxiLeft + maxiRight
    values.push(val)
  }
  return Math.max(...values)
  
  function getMax(list: number[]) {
    let max = {
      index: -1,
      value: 0
    }
    for (let i=0; i < list.length; i++) {
      if (list[i] > max.value) {
        max = {
          index: i,
          value: list[i]
        }
      }
    }
    return max
  }
  
  function maxGiftsAux(list: number[]) {
    const max = getMax(list)
    let maxLeft = 0
    let maxRight = 0
    if (max.index - 2 >= 0) {
      maxLeft = maxGiftsAux(list.slice(0,max.index-1))
    }
    if (max.index + 2 < list.length) {
      maxRight = maxGiftsAux(list.slice(max.index+2,list.length))
    }
    return max.value + maxLeft + maxRight
  }
}
