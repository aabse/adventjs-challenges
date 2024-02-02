function getStaircasePaths(steps: number, maxJump: number) {
  let paths: any[] = []
  let path1 = Array(steps).fill(1)
  paths.push(path1)
  for (let i = 0; i < path1.length-1; i++) {
    generatePath(i, path1)
  }
  
  function generatePath(i: number,path: number[]) {
    if (path[i]+path[i+1] <= maxJump) {
      const newPath = [...path.slice(0,i), path[i]+path[i+1], ...path.slice(i+2)]
      if (!alreadyExists(newPath)) paths.push(newPath)
      for (let j = 0; j < newPath.length; j++) {
        generatePath(j,newPath)
      }
    }
    return
  }
  
  function alreadyExists(path: number[]) {
    let a = JSON.stringify(paths)
    let b = JSON.stringify(path)
    if (a.indexOf(b) !== -1) return true
    return false
  }
  
  return paths.sort()
}
