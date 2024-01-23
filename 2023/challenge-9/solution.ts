function adjustLights(lights: any[]) {
  let lastLight = lights[0]
  const opposites = {
    '🟢': '🔴',
    '🔴': '🟢'
  }
  let count = 0
  for (let i = 1; i < lights.length; i++) {
    if (lights[i] == lastLight) { 
      count++
      lastLight = opposites[lights[i]]                
    } else {
      lastLight = lights[i]
    }
  }
  return Math.min(count,lights.length-count)
}
