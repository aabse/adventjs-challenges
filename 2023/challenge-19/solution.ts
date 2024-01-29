function revealSabotage(store: any[]) {
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] != "*") {
        store[i][j] = adjacentsSabotaged(i,j)
      }
    }
  }
  
  function adjacentsSabotaged(i: number, j: number) {
    let count = 0
    if (store[i-1] != undefined) {
      for (let k = j-1; k <= j+1; k++) {
        if (store[i-1][k] == undefined) continue
        if (store[i-1][k] == "*") count++
      }
    }
    for (let k = j-1; k <= j+1; k++) {
      if (store[i][k] == undefined) continue
      if (store[i][k] == "*") count++
    }
    if (store[i+1] != undefined) {
      for (let k = j-1; k <= j+1; k++) {
        if (store[i+1][k] == undefined) continue
        if (store[i+1][k] == "*") count++
      }
    }
    return count > 0 ? String(count) : " "
  }
  return store
}
