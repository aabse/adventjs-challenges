function autonomousDrive(store: string[], movements: string[]) {
  const MOVEMENT = {
    LEFT: "L",
    RIGHT: "R",
    UP: "U",
    DOWN: "D"
  }
  const POSITION = {
    ROBOT: "!",
    OPEN: ".",
    BLOCKED: "*"
  }
  let x = -1, y = -1
  let storeArray: string[] = []
  store.forEach((row: string) => storeArray.push(row.split("")))
  for (let i = 0; i < store.length; i++) {
    const row = store[i]
    x = row.indexOf(POSITION.ROBOT)
    if(x != -1) {
      y = i
      break
    }
  }
  for (let i = 0; i < movements.length; i++) {
    let newX = x, newY = y
    if (movements[i] == MOVEMENT.RIGHT) {
      newX = x+1
    }
    if (movements[i] == MOVEMENT.LEFT) {
      newX = x-1
    }
    if (movements[i] == MOVEMENT.UP) {
      newY = y-1
    }
    if (movements[i] == MOVEMENT.DOWN) {
      newY = y+1
    }

    if (newX != -1 
    && newY != -1 
    && newY < storeArray.length 
    && newX < storeArray[newY].length
    && storeArray[newY][newX] != POSITION.BLOCKED) {
      storeArray[y][x] = POSITION.OPEN
      storeArray[newY][newX] = POSITION.ROBOT
      x = newX
      y = newY
    } 
  }

  return [...storeArray.map(row => row.join(""))]
}
