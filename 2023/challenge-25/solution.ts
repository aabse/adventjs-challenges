function travelDistance(map: string) {
  let arrayMap = map.split("\n")
  let sumDistances = 0
  let locations = {}
  for (let i = 0; i < arrayMap.length; i++) {
    for (let j = 0; j < arrayMap[i].length; j++) {
      if (arrayMap[i][j] != ".") {
        locations[arrayMap[i][j]] = [i,j]
      }
    }
  }
  let cur = locations['S']
  let next = 1
  while (locations[next]) {
    sumDistances += Math.abs(cur[0]-locations[next][0])
    sumDistances += Math.abs(cur[1]-locations[next][1])
    cur = locations[next]
    next++ 
  }
  return sumDistances
}
