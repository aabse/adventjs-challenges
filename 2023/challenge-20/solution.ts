function distributeGifts(weights: any[]) {
  let finalWeights = Array.apply(null, Array(weights.length)).map(() => [])
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights[i].length; j++) {
      finalWeights[i][j] = calculateAverage(i,j)
    }
  }
  
  function calculateAverage(i,j) {
    let count = 0
    let sum = 0
    let result = 0
    if(weights[i][j] !== undefined && weights[i][j] !== null) {
      count++
      sum+=weights[i][j]
    }
    if(weights[i-1] !== undefined && weights[i-1][j] !== null) {
      count++
      sum+=weights[i-1][j]
    }
    if(weights[i+1] !== undefined && weights[i+1][j] !== null) {
      count++
      sum+=weights[i+1][j]
    }
    if(weights[i][j-1] !== undefined && weights[i][j-1] !== null) {
      count++
      sum+=weights[i][j-1]
    }
    if(weights[i][j+1] !== undefined && weights[i][j+1] !== null) {
      count++
      sum+=weights[i][j+1]
    }
    result = count > 0 ? Math.round(sum/count) : 0
    return result
  }
  return finalWeights
}
